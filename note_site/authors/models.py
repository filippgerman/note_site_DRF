from django.contrib.auth.models import AbstractUser
from django.db import models


class CastomUser(AbstractUser):
    email = models.EmailField(unique=True)
    def __str__(self):
        return self.username
# Create your models here.
