# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/
from django.utils.translation import gettext_lazy as _

from ..defaults import BASE_DIR

LOCALE_PATHS = [
    BASE_DIR / "locale",
]
LANGUAGE_CODE = 'ru'
LANGUAGES = (
    ("en", _("English")),
    ("ru", _("Russian"))
)
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
