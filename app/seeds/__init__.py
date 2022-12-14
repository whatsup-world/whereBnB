from flask.cli import AppGroup
from .users import seed_users, undo_users
from .listings import seed_listings, undo_listings
from .bookings import seed_bookings, undo_bookings
from .likes import seed_likes, undo_likes
from .listing_images import seed_listing_images, undo_listing_images

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_listings()
    seed_bookings()
    seed_likes()
    seed_listing_images()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_listings()
    undo_bookings()
    undo_likes()
    undo_listing_images()
