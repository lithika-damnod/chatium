from http.client import SERVICE_UNAVAILABLE
from json import JSONDecodeError
from tkinter import W
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
import json
from PIL import Image

from .models import *
from .serializers import *
from .utils import *

# Create your views here.


@api_view(['GET'])
def index(request):
    return JsonResponse({
        "status": "success"
    })


@api_view(['POST', 'PUT', 'DELETE', 'OPTIONS'])
def user_actions(request):

    if request.method == 'POST':
        """
            POST data format:
                "firstName" : value,
                "lastName" : value,
                "email" : value,
                "password" : value,
        """
        json_data = json.loads(request.body)
        firstName = str(json_data["firstName"]).capitalize()
        lastName = str(json_data["lastName"]).capitalize()
        email = json_data["email"]
        password = json_data["password"]
        encrypted_password = hashText(password)

        # check whether the email is already taken
        indb = True
        try:
            temp_usr_obj = User.objects.get(email=email)
        except User.DoesNotExist:
            indb = False

        if indb:
            return JsonResponse({
                "status": "error",
                "type": "email"
            })

        n_user = User(email=email, firstName=firstName,
                      lastName=lastName, password=encrypted_password)

        """

        NOT WORKING : TODO
        # select a random profile picture and assign it to profilePic field
        randomPic = selectRandomFile(
            "frontend/public/static/default-profile-pictures")
        pic_path = "frontend/public/static/default-profile-pictures/" + randomPic
        img = Image.open(pic_path)

        """
        n_user.save()
        # get the id of newly created user
        n_id = User.objects.filter(email=email).first().id
        print(n_id)
        # set the session id
        request.session["id"] = n_id
        return JsonResponse({
            "status": "session initiated",
            "id": n_id
        })

    else:
        return JsonResponse({
            "status": "route isn't configured yet"
        })


@api_view(['POST'])
def auth(request):
    json_data = json.loads(request.body)
    email = json_data["email"]
    passwd = json_data["password"]
    # query db and get the user object with the corresponding email
    try:
        user_obj = User.objects.get(email=email)
    except User.DoesNotExist:
        return JsonResponse({
            "status": "error",
            "type": "not found"
        })
    hashed_passwd_inp = hashText(passwd)
    if user_obj.password != hashed_passwd_inp:
        return JsonResponse({
            "status": "error",
            "type": "password"
        })

    return JsonResponse({
        "status": "success",
        "id": user_obj.id
    })


@api_view(['POST'])
def auth_session(request):
    """
        POST data format:
            "session_email" : value
    """
    json_data = json.loads(request.body)
    session_email = str(json_data["session_email"])
    # check whether the email is a valid email
    try:
        user_obj = User.objects.get(email=session_email)
    except User.DoesNotExist:
        return JsonResponse({
            "status": "invalid",
        })

    return JsonResponse({
        "session": "valid"
    })
