# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/
import os

from ..defaults import BASE_DIR

MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = "media/"

STATIC_URL = 'static/'
STATICFILES_DIRS = [
    BASE_DIR / "static",
]
# Cacheable WhiteNoise for production
if os.environ["mode"] == "production":
    STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
