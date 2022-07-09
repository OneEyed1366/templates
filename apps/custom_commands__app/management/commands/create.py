from django.core.management.base import BaseCommand
from django.core.management import call_command
from core.settings import BASE_DIR
from pathlib import Path
from os import makedirs


class Command(BaseCommand):
    def rewrite_apps(self, app_name, file_destination):
        origin: str
        new_content: str

        with open(file_destination, "r", encoding="UTF-8") as apps_file:
            origin = apps_file.read()
            new_content = origin.replace(app_name, f"apps.{app_name}")

        with open(file_destination, "w+", encoding="UTF-8") as new_apps_file:
            new_apps_file.write(new_content)



    def add_arguments(self, parser):
        parser.add_argument(
            nargs="+",
            type=str,
            dest="args"
        )

    def handle(self, *args, **options):
        new_app_name = f"{args[0]}__app"
        full_destination = Path(f"apps/{new_app_name}")
        apps_destination = Path(f"apps/{new_app_name}/apps.py")
        path = BASE_DIR / full_destination

        makedirs(path)
        call_command("startapp", new_app_name, full_destination)

        self.rewrite_apps(new_app_name, apps_destination)
