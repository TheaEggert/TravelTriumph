from django.db import models

'''
Custom city model for TravelTriumph
"name" is the primary key, while "label" is the displayed name of the city
example: name = "new-york", label = "New York"
'''

class City(models.Model):
    name = models.CharField(primary_key=True, max_length=100)
    label = models.CharField(max_length=60)
    description = models.CharField(max_length=300)
    latitude = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    longitude = models.DecimalField(max_digits=5, decimal_places=2, default=0)

    def __str__(self):
        return self.label

    class Meta:
        app_label = 'backend'