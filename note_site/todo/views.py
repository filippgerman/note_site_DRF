from django.shortcuts import render
from rest_framework.pagination import LimitOffsetPagination
from .serializers import ProjectModelSerializer, TodoModelSerializer
from rest_framework.viewsets import ModelViewSet
from .models import Project, Todo
from .filters import ProjectFilter, TodoFilter

from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAdminUser


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10

class TodoPagination(LimitOffsetPagination):
    default_limit = 20
    
class ProjectModelView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination
    filterset_class = ProjectFilter
    permission_classes = [IsAdminUser]

class TodoModelView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoPagination
    filterset_class = TodoFilter

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()
