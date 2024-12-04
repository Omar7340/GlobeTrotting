from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class UserManager(BaseUserManager):
  def create_user(self, email, username, bio=None, password=None):
    if not email:
      raise ValueError('Une adresse email est nécessaire')
    if not username:
      raise ValueError('Un username est nécessaire')
    if not password:
      raise ValueError('Un mot de passe est nécessaire')
        
    user = self.model(
      email=self.normalize_email(email),
      username = username,
      bio= bio
    )

    user.set_password(password)
    user.save(using=self.db)
    return user

  def create_superuser(self, email, username, password, bio=None):
    user = self.create_user(
      email=self.normalize_email(email),
      username=username,
      password=password,
      bio=bio
    )

    user.is_admin = True
    user.is_staff = True
    user.is_superuser = True
    user.save(using=self.db)
    return user



class User(AbstractUser):
  email = models.EmailField(verbose_name="email", unique=True)
  username = models.CharField(max_length=30, unique=True)
  date_joined = models.DateTimeField(verbose_name="date_joined", auto_now_add=True)
  last_login = models.DateTimeField(verbose_name="last_login", auto_now=True)
  is_admin = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
  bio = models.TextField(blank=True, null=True)

  # USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['email']

  objects = UserManager()

  def __str__(self) -> str:
    return self.email
  
  def has_perm(self, perm: str, obj: models.Model | None = ...) -> bool:
    return self.is_admin
  
  def has_module_perms(self, app_label: str) -> bool:
    return True
  
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
  if created:
    Token.objects.create(user=instance)