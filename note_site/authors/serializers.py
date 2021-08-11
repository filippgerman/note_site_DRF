from rest_framework.serializers import HyperlinkedModelSerializer
from .models import CastomUser


class CastomUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = CastomUser
        fields = ['username','first_name','last_name', 'email']
