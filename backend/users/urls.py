from django.urls import path
from .views import registration_view, user_info_view
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('registration/', registration_view, name="registration"),
    path('login/', obtain_auth_token, name="login"),
    path('my-info/', user_info_view, name="user_info"),
]