from django.urls import path
from . import views

urlpatterns = [
    path('api/app/', views.ContactListCreate.as_view() ),
]