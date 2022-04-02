from apps.custom_commands__app.apps import CustomCommandsAppConfig

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
] + [
    "rest_framework"
] + [
    CustomCommandsAppConfig.name,
]
