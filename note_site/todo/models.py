from django.db import models
from authors.models import CastomUser

class Project(models.Model):
    name = models.CharField(max_length=80)
    url = models.CharField(max_length=200)
    is_active = models.BooleanField(default=False)
    user = models.ForeignKey(CastomUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Todo(models.Model):
    name = models.CharField(max_length=80)
    is_active = models.BooleanField(default=False)
    users = models.ManyToManyField(CastomUser)
    project = models.ManyToManyField(Project)

    def __str__(self):
        return self.name
    
