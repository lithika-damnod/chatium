from django.db import models
from django.core.files.storage import FileSystemStorage
from django.utils import timezone

class User(models.Model): 
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=300, blank=False)
    password = models.TextField(blank=False)
    profilePic = models.ImageField(null=True, blank=True, upload_to="user/")

    def __str__(self): 
        return f"firstname: {self.firstName}, lastname: {self.lastName}, email: {self.email}, password: {self.password}"


class Chat(models.Model): 
    sender = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    msg = models.TextField(blank=False)

    def __str__(self):
        return f"sender: {self.sender} msg: {self.msg}"