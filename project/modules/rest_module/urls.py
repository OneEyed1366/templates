# Routers provide an easy way of automatically determining the URL conf.
from rest_framework import routers
from django.urls import path, include
from .serializers import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = ([
    path("", include(router.urls), name="router_urls"),
    path("api-auth/", include("rest_framework.urls"), name="api"),
], "rest")
