from backend.models import City
from backend.serializers import CitySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# HTTP requests involving the entire list of cities
@api_view(['GET', 'POST'])
def city_list(request):

    # Get list of cities
    if request.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response({'cities': serializer.data})

    # Add a new city
    elif request.method == 'POST':
        serializer = CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

# HTTP requests involving a single city
@api_view(['GET', 'PUT', 'DELETE'])
def city_detail(request, pk):
    
        try:
            city = City.objects.get(pk=pk)
        except City.DoesNotExist:
            return Response(status=404)
    
        # Get a city's data
        if request.method == 'GET':
            serializer = CitySerializer(city)
            return Response(serializer.data)
    
        # Update a city's data
        elif request.method == 'PUT':
            serializer = CitySerializer(city, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
    
        # Delete a city
        elif request.method == 'DELETE':
            city.delete()
            return Response(status=204)