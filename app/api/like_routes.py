from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Listing, User, Like


like_routes = Blueprint('likes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@like_routes.route('', methods=['POST'])
@login_required
def like_listing():
    data = request.json

    listing_id = data

    exist_like = Like.query.filter(Like.user_id == current_user.id, Like.listing_id == listing_id).scalar()

    if exist_like:
        db.session.delete(exist_like)
        db.session.commit()
        unlike_listing = Listing.query.get(listing_id)
        return {'unlike': unlike_listing.to_dict()}



    new_like = Like(user_id = current_user.id, listing_id = listing_id)
    db.session.add(new_like)
    db.session.commit()
    liked_listing = Listing.query.get(listing_id)
    return {'liked': liked_listing.to_dict()}


@like_routes.route('')
# @login_required

def like_get():
    user_likes = Like.query.filter(Like.user_id == current_user.id).all()
    liked_listing = []
    for like in user_likes:
        liked_listing.append(Listing.query.get(like.listing_id))
    return {'liked_listings': [listing.to_dict() for listing in liked_listing]}
