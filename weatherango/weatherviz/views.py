from django.shortcuts import render, HttpResponse
from .models import WeatherStation
import json
from weatherango.settings import WUNDERGROUND_API_KEY
from django.views.decorators.csrf import csrf_exempt
import urllib2
from ast import literal_eval
from datetime import date, timedelta as td


# Create your views here.

def index(request):
    '''
    Renders the index page
    '''
    return render(request, 'index.html', {})


def get_cities(request):
    '''
    Returns all the weather stations in database
    '''
    weather_stations = WeatherStation.objects.all()
    serialized_data = serialize_weather_stations(weather_stations)
    return HttpResponse(json.dumps(serialized_data),
                        content_type="application/json")


def serialize_weather_stations(weather_stations):
    '''
    Serializes Python Objects to JSON
    '''
    result = []  # Empty for each call
    for weather_station in weather_stations:
        d = {}  # To make a dictionary for JSON Response
        d['name'] = weather_station.name
        d['zmw'] = weather_station.zmw
        result.append(d)
    return result


parameter_to_full_name = {
    'tempm': 'Temperature',
    'hum': 'Humidity',
    'wspdm': 'Wind Speed',
}


@csrf_exempt
def get_weather_statistics(request):
    '''
    Returns the weather data according to
    start_date, end_date, parameter and
    weather station as JSON.
    '''
    if request.method == 'POST':
        response = json.loads(request.body)
        try:
            start_date = response["start_date"]
            end_date = response["end_date"]
            zmw = response["zmw"]
            parameter = response["parameter"]
        except KeyError:
            response_dict = {"message":
                            "start_date, end_date, zmw or parameter missing"}
            return HttpResponse(json.dumps(response_dict),
                            content_type="application/json")
        start_date = normalize_date(start_date)
        end_date = normalize_date(end_date)
        date_list = generate_date_list(start_date, end_date)
        url_list = generate_url_list(date_list, zmw)
        main_data_list = []
        main_label_list = []
        for url in url_list:
            try:
                r = urllib2.urlopen(url)
            except:
                continue
            resp = literal_eval(r.read())
            data_list = []
            label_list = []
            for observation in resp["history"]["observations"]:
                data_list.append(observation[parameter])
                label_list.append(observation["date"]["pretty"])
            main_data_list.extend(data_list)
            main_label_list.extend(label_list)
        parameter = parameter_to_full_name[parameter]
        response_dict = {"label": parameter,
                         "data": main_data_list,
                         "labels": main_label_list}
        return HttpResponse(json.dumps(response_dict),
                            content_type="application/json")


MONTH_DICT = {'January': 1,
              'February': 2,
              'March': 3,
              'April': 4,
              'May': 5,
              'June': 6,
              'July': 7,
              'August': 8,
              'September': 9,
              'October': 10,
              'November': 11,
              'December': 12
              }


def normalize_date(date_str):
    '''
    Translates a date string of type May 1, 2016
    into YYYYMMDD format as 20160501
    '''
    day = str(date_str.split(' ')[:1][0])
    if len(day) == 1:
        day = day.zfill(2)
    month = date_str.split(' ')[1:2][0].split(',')[0]
    month = str(MONTH_DICT[month])
    if len(month) == 1:
        month = month.zfill(2)
    year = date_str.split()[2]
    return str(year + month + day)


def generate_date_list(start_date, end_date):
    '''
    Generate all dates between start_date and
    end_date and returns a list of all dates
    to generate URLS for querying.
    '''
    d_list = []
    date_list = []
    start_date = date(int(start_date[:4]),
                      int(start_date[4:6]),
                      int(start_date[6:]))
    end_date = date(int(end_date[:4]),
                    int(end_date[4:6]),
                    int(end_date[6:]))

    delta = end_date - start_date

    for i in range(delta.days + 1):
        d_list.append(start_date + td(days=i))

    for d in d_list:
        date_list.append(''.join(str(d).split('-')))

    return date_list


def generate_url_list(date_list, zmw):
    '''
    Generate urls for each day as given by start_date
    and end_date and return list of all urls to query
    '''
    url_list = []
    for date in date_list:
        YYYYMMDD = date
        url = ("http://api.wunderground.com/api/" +
               WUNDERGROUND_API_KEY +
               "/history_" +
               YYYYMMDD +
               "/q/zmw:" + zmw + ".json")

        url_list.append(url)

    return url_list


@csrf_exempt
def add_weather_station(request):
    '''
    Add a new weather station in database
    '''
    if request.method == 'POST':
        response = json.loads(request.body)
        zmw = response["zmw"]
        name = response["name"]
        country = response["country"]
        weather_station = WeatherStation.objects.get_or_create(
            name=name, country=country, zmw=zmw)
        return HttpResponse(json.dumps({"message": "added"}),
                                        content_type="application/json")
