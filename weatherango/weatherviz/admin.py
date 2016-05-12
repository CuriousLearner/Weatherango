from django.contrib import admin
from .models import WeatherStation

# Register your models here.


class WeatherStationAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'zmw')


admin.site.register(WeatherStation, WeatherStationAdmin)
