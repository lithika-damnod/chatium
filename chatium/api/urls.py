from django.urls import path
from .  import views

urlpatterns = [
    path("", views.index, name="index"), 
    path("user/", views.user_actions, name="user_actions"), 
    path("auth/", views.auth, name="auth"), 
]