from django.test import TestCase
from backend.models import City
from decimal import Decimal

class TestModels(TestCase):

    def setUp(self):
        City.objects.create(
            name='NewYork',
            label='New York',
            description='The Big Apple',
            latitude=40.71,
            longitude=74.01
        )
        City.objects.create(
            name='LosAngeles',
            label='Los Angeles',
            description='The City of Angels',
            latitude=34.05,
            longitude=118.24
        )

    def test_city_fields(self):
        NewYork = City.objects.get(name='NewYork')

        self.assertEqual(NewYork.label, 'New York')
        self.assertEqual(NewYork.description, 'The Big Apple')
        self.assertEqual(NewYork.latitude, Decimal('40.71'))
        self.assertEqual(NewYork.longitude, Decimal('74.01'))

        LosAngeles = City.objects.get(name='LosAngeles')

        self.assertEqual(LosAngeles.label, 'Los Angeles')
        self.assertEqual(LosAngeles.description, 'The City of Angels')
        self.assertEqual(LosAngeles.latitude, Decimal('34.05'))
        self.assertEqual(LosAngeles.longitude, Decimal('118.24'))