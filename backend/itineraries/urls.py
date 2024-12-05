from django.urls import path
from .views import create_itineraries_view

urlpatterns = [
    path('/create', create_itineraries_view, name="create_itineraries"),
]