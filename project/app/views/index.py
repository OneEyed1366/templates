from typing import Any

from django.template import loader
from django.http import HttpResponse

def index_view(request) -> HttpResponse:
    _context = {}
    _template: Any = loader.get_template("pages/index.html")

    return HttpResponse(_template.render(_context, request))
