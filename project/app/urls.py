import os

from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns
from .views.index import index_view
from .settings.components.static_and_media import \
    MEDIA_URL,\
    MEDIA_ROOT

# Rest_module Urls
from project.modules.rest_module.urls import urlpatterns as rest_module_urls

urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns += i18n_patterns(
    #  Localization
    path("i18n/", include("django.conf.urls.i18n")),
    # Django rest framework
    path("api/", include(rest_module_urls, namespace="rest_module")),
    # Views
    path("", index_view, name="index_page"),
    # Parameters
    prefix_default_language=False,
)

if os.environ["mode"] == "development":
    urlpatterns += static(
        MEDIA_URL,
        document_root=MEDIA_ROOT,
    )
