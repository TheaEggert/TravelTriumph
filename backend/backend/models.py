from django.db import models
import uuid

class City(models.Model):
    name = models.CharField(primary_key=True, max_length=100)
    label = models.CharField(max_length=60)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.label

    class Meta:
        app_label = 'backend'