from curses.ascii import HT
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view

from .models import * 
from .serializers import * 

# Create your views here.
@api_view(['GET'])
def index(request): 
    return JsonResponse({
        "status": "success"
    })
