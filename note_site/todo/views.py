from django.shortcuts import render
from .serializers import ProjectModelSerializer, TodoModelSerializer
from rest_framework.viewsets import ModelViewSet
from .models import Project, Todo

class ProjectModelView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class TodoModelView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer

# Create your views here.
