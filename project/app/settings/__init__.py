import os
import sys

from .components.installed_apps import *
from .components.middlewares import *
from .components.templates import *
from .components.databases import *
from .components.auth_validations import *
from .components.localizations import *
from .components.static_and_media import *
from .components.cors import *
from .defaults import *
# Add "project" to the sys.path
sys.path.append("..")

if os.environ["mode"] == "production":
    from .modes.production import *
else:
    from .modes.development import *
