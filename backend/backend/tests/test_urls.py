from django.test import SimpleTestCase
from django.urls import reverse, resolve
from backend.views import city_list, city_detail

class TestUrls(SimpleTestCase):

    def test_list_url_is_resolved(self):
        url = reverse('city_list')

        self.assertEqual(resolve(url).func, city_list)

    def test_detail_url_is_resolved(self):
        url = reverse('city_detail', args=[1])

        self.assertEqual(resolve(url).func, city_detail)

    