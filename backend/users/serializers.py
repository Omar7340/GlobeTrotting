from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Profil


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class ProfilSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profil
        fields = ['user', 'bio']