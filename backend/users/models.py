from django.db import models
from django.contrib.auth.models import User

class Profil(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  bio = models.TextField(blank=True, null=True)
