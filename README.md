# Weatherango
An App to visualize various weather parameters in any city for specific date range.

If the weather station is not visible in drop down, you can add available weather stations by clicking on `ADD NEW WEATHER STATION`.

### Installation

- Activate virtual environment and install dependencies:

```bash
$ pip install -r requirements.txt
```

- Generate your `WUNDERGROUND_API_KEY` from [Wunderground.com](https://www.wunderground.com/weather/api/)


- Set up `SECRET_KEY` and `WUNDERGROUND_API_KEY` as env variables

```bash
(venv) $ export SECRET_KEY='c)sd34%#--329@#$*^49mm#$%j34234!#$j)yr3=%4e*'
(venv) $ export WUNDERGROUND_API_KEY="344eev246sdf"
```

- Now run server by:

```bash
(venv) $ python manage.py runserver
```

The app is up and running at [localhost:8000](http://127.0.0.1:8000)


#### Warning: 

Please use the date range of less than approx a week. This is because of wunderground API call limitations.
