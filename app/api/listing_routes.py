from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Listing, db

listing_routes = Blueprint('listings', __name__)


@listing_routes.route('')
def listing_get():
    listings = Listing.query.all()
    return {'Listings': [listing.to_dict() for listing in listings]}
