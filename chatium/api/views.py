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

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
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
        firstName = request.POST.get("firstName")
        lastName = request.POST.get("lastName")
        email = request.POST.get("email")
        password = request.POST.get("password")
        print(f"first: {firstName} last: {lastName} email: {email} password: {password}")
        n_user = User(email=email, firstName=firstName, lastName=lastName, password=password)
        n_user.save()
        # get the id of newly created user 
        n_id = User.objects.first(email=email)
        # set the session id 
        request.session["id"] = n_id

        return JsonResponse({
            "status" : "session initiated"
        })