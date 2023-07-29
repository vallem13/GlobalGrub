from flask.cli import AppGroup
from .users import seed_users, undo_users
from .restaurants import seed_restaurants, undo_restaurants
from .cuisine_type import seed_cuisine_types, undo_cuisine_types
from .reviews import seed_reviews, undo_reviews
from .menu_items import seed_menu_items, undo_menu_items

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_menu_items()
        undo_reviews()
        undo_restaurants()
        undo_cuisine_types()
        undo_users()
    seed_users()
    seed_cuisine_types()
    seed_restaurants()
    seed_reviews()
    seed_menu_items()
    print('------> db seeded')


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # Add other undo functions here
    undo_menu_items()
    undo_reviews()
    undo_restaurants()
    undo_cuisine_types()
    undo_users()
    print('------> db unseeded')
