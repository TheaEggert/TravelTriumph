from django.db import models
import uuid

class City(models.Model):
    name = models.UUIDField(primary_key=True, auto_created=True, default=uuid.uuid4, editable=False)
    label = models.CharField(max_length=60)
    description = models.CharField(max_length=60)

    def __str__(self):
        return self.label

    class Meta:
        app_label = 'backend'