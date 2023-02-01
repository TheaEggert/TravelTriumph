from rest_framework import serializers
from backend.models import City

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('name', 'label', 'description')