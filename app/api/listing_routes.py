from ctypes import addressof
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import ListingForm
from app.models import Listing, db

listing_routes = Blueprint('listings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@listing_routes.route('/')
def listing_get():
    listings = Listing.query.all()
    return {'Listings': [listing.to_dict() for listing in listings]}

@listing_routes.route('/', methods = ["POST"])
@login_required
def add_listing():
    form = ListingForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_listing = Listing(
            user_id = form.data["user_id"],
            address = form.data["address"],
            city = form.data["city"],
            state = form.data["state"],
            zip = form.data["zip"],
            category = form.data["category"],
            description = form.data["description"],
            price = form.data["price"],
        )

        db.session.add(new_listing)
        db.session.commit()

        return new_listing.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
