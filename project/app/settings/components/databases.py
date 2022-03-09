# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases
from ..defaults import BASE_DIR

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
