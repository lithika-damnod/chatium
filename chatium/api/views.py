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

# :TODO Recheck the function 
@api_view(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])
def user_actions(request):

    # get current user info 
    if request.method == 'GET': 
        user_id = request.session.get("id")
        print(user_id)
        if user_id is not None: 
            user_object = User.objects.filter(id=user_id)
            # send error if no match found
            if len(user_object) == 0: 
                return JsonResponse({
                    "id" : user_id, 
                    "status" : 404
                })
            
            serialized = UserSerializer(user_object)
            # return serialized data
            return JsonResponse(serialized.data , safe=False)

        return JsonResponse({
            "id" : user_id
        })

    elif request.method == 'POST': 
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
        indb=True
        try: 
            temp_usr_obj = User.objects.get(email=email) 
        except User.DoesNotExist: 
            indb=False
        
        if indb: 
            return JsonResponse({
                "status" : "error", 
                "type" : "email"
            })

        n_user = User(email=email, firstName=firstName, lastName=lastName, password=encrypted_password)

        """ NOT WORKING :TODO  
        # select a random profile picture and assign it to profilePic field 
        randomPic = selectRandomFile("frontend/public/static/default-profile-pictures")
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
            "status" : "session initiated", 
            "id" : n_id
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
        return  JsonResponse({
            "status" : "error", 
            "type" : "not found"
        }) 
    hashed_passwd_inp = hashText(passwd)
    if user_obj.password != hashed_passwd_inp:
        return JsonResponse({
            "status" : "error", 
            "type" : "password"
        })
    # initiate sessions
    request.session["id"] = user_obj.id 

    return JsonResponse({
        "status" : "success", 
        "id": user_obj.id
    })