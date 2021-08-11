from django.shortcuts import render
from .serializers import CastomUserModelSerializer
from .models import CastomUser
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import GenericViewSet
   
class CastomUserModelView(ListModelMixin,RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = CastomUser.objects.all()
    serializer_class = CastomUserModelSerializer

# Create your views here.
