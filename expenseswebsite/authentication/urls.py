from .views  import RegisterationView,UsernameFieldValidation
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('register',RegisterationView.as_view(),name="register"),
    path('validate-username',csrf_exempt(UsernameFieldValidation.as_view()),name="validate username")
    
]
