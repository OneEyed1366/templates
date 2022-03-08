import os

from .defaults import *

if os.environ["project"] == "production":
    from .production import *
else:
    from .development import *
