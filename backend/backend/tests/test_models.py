from django.test import TestCase
from backend.models import City

class TestModels(TestCase):

    def setUp(self):
        City.objects.create(
            label='New York',
            description='The Big Apple'
        )
        City.objects.create(
            label='Los Angeles',
            description='The City of Angels'
        )

    def test_city_description(self):
        NewYork = City.objects.get(label='New York')
        LosAngeles = City.objects.get(label='Los Angeles')
        self.assertEqual(NewYork.description, 'The Big Apple')
        self.assertEqual(LosAngeles.description, 'The City of Angels')