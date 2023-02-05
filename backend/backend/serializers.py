from rest_framework import serializers
from backend.models import City

# Serializers define the API representation.
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'