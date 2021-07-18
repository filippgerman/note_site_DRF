from django.shortcuts import render
from .serializers import CastomUserModelSerializer
from rest_framework.viewsets import ModelViewSet
from .models import CastomUser

class CastomUserModelView(ModelViewSet):
    queryset = CastomUser.objects.all()
    serializer_class = CastomUserModelSerializer


# Create your views here.
