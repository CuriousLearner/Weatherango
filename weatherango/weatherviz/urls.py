from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index),
    url(r'^api/city/$', views.get_cities),
    url(r'^api/weather/$', views.get_weather_statistics),
    url(r'^api/weatherstation/$', views.add_weather_station),
]
