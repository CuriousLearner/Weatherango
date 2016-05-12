from __future__ import unicode_literals

from django.db import models

# Create your models here.


class WeatherStation(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    zmw = models.CharField(max_length=50)

    def __str__(self):
        return self.name + " " + self.country + " " + self.zmw
