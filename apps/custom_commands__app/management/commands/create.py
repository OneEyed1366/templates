from django.core.management.base import BaseCommand
from django.core.management import call_command
from core.settings import BASE_DIR
from pathlib import Path
from os import makedirs


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument(
            nargs="+",
            type=str,
            dest="args"
        )

    def handle(self, *args, **options):
        destination = f"{args[0]}__app"
        full_destination = Path(f"apps/{destination}")
        path = BASE_DIR / full_destination

        makedirs(path)
        call_command("startapp", destination, full_destination)
