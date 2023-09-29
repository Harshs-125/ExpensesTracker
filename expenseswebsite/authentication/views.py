from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from validate_email import validate_email
import json
# Create your views here.

class RegisterationView(View):
    def get(self,request):
        return render(request,'authentication/register.html')

class UsernameFieldValidation(View):
    def post(self,request):
        data=json.loads(request.body)
        username=data['username']
        if not str(username).isalnum():
            return JsonResponse({"username_error":"username must be alpha numeric"},status=409)
        if User.objects.filter(username=str(username)).exists():
            return JsonResponse({"username_error":"username already exist , choose another one"},status=409)
        return JsonResponse({"username_valid":True},status=200) 

class EmailValidation(View):
    def post(self,request):
        data=json.loads(request.body)
        email=data['email']
        if not validate_email(email):
            return JsonResponse({"email_error":"Email is invalid, choose valid email"},status=409)
        if User.objects.filter(email=str(email)).exists():
            return JsonResponse({"email_error":"Email is already in user , please choose another one"},status=409)
        return JsonResponse({"email_valid":True},status=200) 