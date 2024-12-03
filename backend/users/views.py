from django.contrib.auth.models import User
from .models import Profil
from rest_framework import permissions, viewsets

from .serializers import UserSerializer, ProfilSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProfilViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Profil.objects.all().order_by('user')
    serializer_class = ProfilSerializer
    permission_classes = [permissions.IsAuthenticated]