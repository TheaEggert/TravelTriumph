from django.test import TestCase
from backend.models import City

class TestModels(TestCase):

    def test_city_str(self):
        name = City.objects.create(name='TestCity')
        label = City.objects.create(label='Test Label')
        description = City.objects.create(description='Test Description')
        self.assertEqual(str(name), 'TestCity')
        self.assertEqual(str(label), 'Test Label')
        self.assertEqual(str(description), 'Test Description')