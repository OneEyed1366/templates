from django.core.management.base import BaseCommand
from django.core.management import call_command


class Command(BaseCommand):
    def handle(self, *args, **options):
        """
        Making all migrations
        """
        call_command("makemessages", "-a")
        call_command("compilemessages")
