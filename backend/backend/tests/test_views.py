import django.test import TestCase, Client
from django.urls import reverse
from backend.models import City


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.list_url = reverse('list')
        self.detail_url = reverse('detail', args=['1'])

    def test_city_list_GET(self):
        response = self.client.get(self.list_url)
        self.assertEquals(response.status_code, 200)
