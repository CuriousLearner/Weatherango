$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  // CORS is blocked on this autocomplete request
  // by wunderground, so having the output of
  // request saved in an array named available_stations
  // and doing processing as usual

  // var ajax = new XMLHttpRequest();
  // ajax.open("GET", "http://autocomplete.wunderground.com/aq?query=", true);
  // ajax.onload = function() {
  //   var list = JSON.parse(ajax.responseText)["RESULTS"].map(function(i) { return i.name; });
  //   new Awesomplete(document.querySelector("#city"),{ list: list });
  // };
  // ajax.send();

  var available_stations = { "RESULTS": [ { "name": "Abidjan, Ivory Coast", "type": "city", "c": "CI", "zmw": "00000.1.65578", "tz": "Africa/Abidjan", "tzs": "GMT", "l": "/q/zmw:00000.1.65578", "ll": "5.250000 -3.930000", "lat": "5.250000", "lon": "-3.930000" }, { "name": "Accra, Ghana", "type": "city", "c": "GH", "zmw": "00000.1.65472", "tz": "Africa/Accra", "tzs": "GMT", "l": "/q/zmw:00000.1.65472", "ll": "5.600000 -0.170000", "lat": "5.600000", "lon": "-0.170000" }, { "name": "Abobo, Ivory Coast", "type": "city", "c": "CI", "zmw": "00000.9.65578", "tz": "Africa/Abidjan", "tzs": "GMT", "l": "/q/zmw:00000.9.65578", "ll": "5.418889 -4.020555", "lat": "5.418889", "lon": "-4.020555" }, { "name": "Aba, Nigeria", "type": "city", "c": "NG", "zmw": "00000.5.WDNIM", "tz": "Africa/Lagos", "tzs": "WAT", "l": "/q/zmw:00000.5.WDNIM", "ll": "5.116667 7.366667", "lat": "5.116667", "lon": "7.366667" }, { "name": "Abu Dhabi, United Arab Emirates", "type": "city", "c": "AE", "zmw": "00000.1.41217", "tz": "Asia/Dubai", "tzs": "GST", "l": "/q/zmw:00000.1.41217", "ll": "24.430000 54.650002", "lat": "24.430000", "lon": "54.650002" }, { "name": "Abeokuta, Nigeria", "type": "city", "c": "NG", "zmw": "00000.1.65213", "tz": "Africa/Lagos", "tzs": "WAT", "l": "/q/zmw:00000.1.65213", "ll": "7.170000 3.330000", "lat": "7.170000", "lon": "3.330000" }, { "name": "Abomey-Calavi, Benin", "type": "city", "c": "BJ", "zmw": "00000.6.65344", "tz": "Africa/Porto-Novo", "tzs": "WAT", "l": "/q/zmw:00000.6.65344", "ll": "6.450000 2.350000", "lat": "6.450000", "lon": "2.350000" }, { "name": "Achiaman, Ghana", "type": "city", "c": "GH", "zmw": "00000.6.65472", "tz": "Africa/Accra", "tzs": "GMT", "l": "/q/zmw:00000.6.65472", "ll": "5.700000 -0.333333", "lat": "5.700000", "lon": "-0.333333" }, { "name": "Aberdeen, United Kingdom", "type": "city", "c": "GB", "zmw": "00000.1.03091", "tz": "Europe/London", "tzs": "BST", "l": "/q/zmw:00000.1.03091", "ll": "57.200001 -2.220000", "lat": "57.200001", "lon": "-2.220000" }, { "name": "Abakan, Russia", "type": "city", "c": "RU", "zmw": "00000.1.WUNAA", "tz": "Asia/Krasnoyarsk", "tzs": "KRAT", "l": "/q/zmw:00000.1.WUNAA", "ll": "53.720001 91.370003", "lat": "53.720001", "lon": "91.370003" }, { "name": "Acheng, China", "type": "city", "c": "CN", "zmw": "00000.2.50953", "tz": "Asia/Harbin", "tzs": "CST", "l": "/q/zmw:00000.2.50953", "ll": "45.533333 126.983330", "lat": "45.533333", "lon": "126.983330" }, { "name": "Acarigua, Venezuela", "type": "city", "c": "VE", "zmw": "00000.1.80427", "tz": "America/Caracas", "tzs": "VET", "l": "/q/zmw:00000.1.80427", "ll": "9.550000 -69.230003", "lat": "9.550000", "lon": "-69.230003" }, { "name": "Abakaliki, Nigeria", "type": "city", "c": "NG", "zmw": "00000.5.65257", "tz": "Africa/Lagos", "tzs": "WAT", "l": "/q/zmw:00000.5.65257", "ll": "6.333333 8.100000", "lat": "6.333333", "lon": "8.100000" }, { "name": "Abiko, Japan", "type": "city", "c": "JP", "zmw": "00000.2.47695", "tz": "Asia/Tokyo", "tzs": "JST", "l": "/q/zmw:00000.2.47695", "ll": "35.866665 140.016663", "lat": "35.866665", "lon": "140.016663" }, { "name": "Abohar, India", "type": "city", "c": "IN", "zmw": "00000.2.42123", "tz": "Asia/Kolkata", "tzs": "IST", "l": "/q/zmw:00000.2.42123", "ll": "30.150000 74.183334", "lat": "30.150000", "lon": "74.183334" }, { "name": "Abbotsford, Canada", "type": "city", "c": "CA", "zmw": "00000.1.71108", "tz": "America/Vancouver", "tzs": "PDT", "l": "/q/zmw:00000.1.71108", "ll": "49.029999 -122.370003", "lat": "49.029999", "lon": "-122.370003" }, { "name": "Achinsk, Russia", "type": "city", "c": "RU", "zmw": "00000.2.29467", "tz": "Asia/Krasnoyarsk", "tzs": "KRAT", "l": "/q/zmw:00000.2.29467", "ll": "56.270000 90.500000", "lat": "56.270000", "lon": "90.500000" }, { "name": "Abilene, Texas", "type": "city", "c": "US", "zmw": "79601.1.99999", "tz": "America/Chicago", "tzs": "CDT", "l": "/q/zmw:79601.1.99999", "ll": "32.479019 -99.700020", "lat": "32.479019", "lon": "-99.700020" }, { "name": "Achalpur, India", "type": "city", "c": "IN", "zmw": "00000.2.42937", "tz": "Asia/Kolkata", "tzs": "IST", "l": "/q/zmw:00000.2.42937", "ll": "21.257223 77.508614", "lat": "21.257223", "lon": "77.508614" }, { "name": "Abengourou, Ivory Coast", "type": "city", "c": "CI", "zmw": "00000.3.65562", "tz": "Africa/Abidjan", "tzs": "GMT", "l": "/q/zmw:00000.3.65562", "ll": "6.716667 -3.466667", "lat": "6.716667", "lon": "-3.466667" } ] }

  list = available_stations["RESULTS"].map(function(i) {
    return i.name;
  });

  new Awesomplete(document.querySelector("#city"), { minChars: 0, list: list });

  $('.add-station-btn').click(function (e) {
    e.preventDefault();
    city = $('#city').val();

    for (i in available_stations["RESULTS"]) {
      if (available_stations["RESULTS"][i]["name"] == city) {
        zmw = available_stations["RESULTS"][i]["zmw"];
        country = available_stations["RESULTS"][i]["tz"];
      }
    }

    // AJAX class for adding new city to the database
    $.ajax({
      method: "POST",
      url: "/api/weatherstation/",
      data: JSON.stringify({
        "name": city,
        "zmw": zmw,
        "country": country
      }),
      success: function(data, textStatus, xhr) {
        document.getElementById("city-added")
        .innerHTML = "City successfully added!";
      },
      error: function(xhr, status, error) {
        document.getElementById("city-added")
        .innerHTML = "City is already there in the list!";
      }
    });

    // AJAX call for updating the cities in dropdown
    $.ajax({
        method: "GET",
        url: "/api/city/",
        success: function(jsonDataForCities) {
          createCityOptions(jsonDataForCities);
        }
      }
    );
    return false;
  });


  jsonDataForCities = undefined;

  function createCityOptions(jsonDataForCities) {
    $("#city-select").empty();
    for (var city in jsonDataForCities) {
      var option = '<option value="'+ jsonDataForCities[city].zmw +'">' + jsonDataForCities[city].name + '</option>';
      $('#city-select').append(option);
    }
  };

  $.ajax({
      method: "GET",
      url: "/api/city",
      success: function(jsonDataForCities) {
        createCityOptions(jsonDataForCities);
      }
    }
  );

  var start_date, end_date, zmw, parameter;

  $('.submit-btn').click(function (e) {
    e.preventDefault();
    start_date = $('#start-date').val();
    end_date = $('#end-date').val();
    zmw = $('#city-select').val();
    parameter = $('#parameter-select').val();
    if (validate_form_data(start_date, end_date, zmw, parameter)) {
      if (check_start_date_less_than_end_date(start_date, end_date)) {
        sendWeatherForm(start_date, end_date, zmw, parameter);
      }
      else {
        alert("Start Date must be less than End date");
      }
    }
    else {
      alert("Please fill all fields in the form");
    }
    return false;
  });

  function validate_form_data(start_date, end_date, zmw, parameter) {

    if (start_date != "" &&
        end_date != "" &&
        zmw != "" &&
        parameter != "") {
      return true;
    }
    return false;
  };

  function check_start_date_less_than_end_date(start_date, end_date) {
    var start_date_val = new Date(start_date);
    var end_date_val = new Date(end_date);

    if(+start_date_val <= +end_date_val) {
      return true;
    }
    return false;
  }

  function sendWeatherForm(start_date, end_date, zmw, parameter) {
    $.ajax({
      method: "POST",
      url: "/api/weather/",
      data: JSON.stringify({
        "start_date": start_date,
        "end_date": end_date,
        "zmw": zmw,
        "parameter": parameter
      }),
      success: function(weather_statistics) {
        create_graph(weather_statistics);
      }
    });
  };

  // Date Picker for form

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  // Code to visualize graph

  function create_graph(weather_statistics) {
    document.getElementById("graph-title").innerHTML = "Graph Visualization";
    $('#myChart').remove();
    $('.result').append('<canvas id="myChart" width="400" height="400"><canvas>');
    var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
      labels: weather_statistics["labels"],
      datasets: [
        {
          label: weather_statistics["label"],
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: weather_statistics["data"],
        }
      ]
    };

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
});
