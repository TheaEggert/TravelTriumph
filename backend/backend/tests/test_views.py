'''
This file contains the tests for the views in the backend app.

There is a test for each view in the backend app: city_list and city_detail.
'''
from django.test import TestCase, Client
from django.urls import reverse
from backend.views import city_list, city_detail
from backend.models import City
from decimal import Decimal
from rest_framework.test import APITestCase

class CitiesAPITestCase(APITestCase):

    # Create a city to test with
    def create_city(self):
        sample_city = {'name': 'NewYork', 'label': 'New York', 'description': 'The Big Apple', 'latitude': 40.71, 'longitude': 74.01}
        response = self.client.post(reverse('city_list'), sample_city)
        return response


class TestListViews(CitiesAPITestCase):

    def test_creates_new_city(self):

        # Number of cities before POST request
        previous_city_count = City.objects.all().count()

        # POST request
        response = self.create_city()

        # Number of cities after POST request should be one more than before
        self.assertEqual(City.objects.all().count(), previous_city_count + 1)

        # Check that the response is 201
        self.assertEqual(response.status_code, 201)

        # Check that the response data is correct
        self.assertEqual(response.data['name'], 'NewYork')
        self.assertEqual(response.data['label'], 'New York')
        self.assertEqual(response.data['description'], 'The Big Apple')
        self.assertEqual(response.data['latitude'], '40.71') # in str form because JSON makes the data into string form
        self.assertEqual(response.data['longitude'], '74.01') # in str form because JSON makes the data into string form

    def test_gets_all_cities(self):
        response = self.client.get(reverse('city_list'))
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.data['cities'], list)

class TestDetailViews(CitiesAPITestCase):

    def test_retrieves_one_city(self):
        response = self.create_city()

        res = self.client.get(reverse('city_detail', kwargs={'pk': response.data['name']}))

        self.assertEqual(res.status_code, 200)

        city = City.objects.get(pk=response.data['name'])

        self.assertEqual(res.data['name'], city.name)

    def test_updates_one_city(self):
        response = self.create_city()

        res = self.client.put(
            reverse('city_detail', kwargs={'pk': response.data['name']}), {
            'name': 'NewYork',
            'label': 'New York',
            'description': 'The Bigger Apple',
            'latitude': '40.72',
            'longitude': '74.01'
            })

        self.assertEqual(res.status_code, 200)

        updated_city = City.objects.get(pk=response.data['name'])
        self.assertEqual(updated_city.description, 'The Bigger Apple')
        self.assertEqual(updated_city.latitude, Decimal('40.72'))

    def test_deletes_one_city(self):
        res = self.create_city()

        previous_city_count = City.objects.all().count()

        self.assertGreater(previous_city_count, 0)
        self.assertEqual(previous_city_count, 1)

        response = self.client.delete(reverse('city_detail', kwargs={'pk': res.data['name']}))

        self.assertEqual(response.status_code, 204)

        self.assertEqual(City.objects.all().count(), 0)

