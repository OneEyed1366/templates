# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/
from core.settings import BASE_DIR

STATIC_URL = 'static/'
STATICFILES_DIRS = [
    BASE_DIR / "static"
]

MEDIA_ROOT = "media/"
MEDIA_URL = "/"
