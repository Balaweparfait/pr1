from django.urls import path
from . import views

app_name = 'authUser'

urlpatterns=[
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('login/', views.register_user, name='register') 
]