from flask import Blueprint, request
from flask_login import login_required
from app.forms import BookingForm
from app.models import Booking, db

booking_routes = Blueprint('bookings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@booking_routes.route('/users/<id>')
@login_required
def booking_get(id):
    bookings = Booking.query.filter(Booking.user_id == id).all()
    return {'Bookings': [booking.to_dict() for booking in bookings]}


@booking_routes.route('', methods = ['POST'])
@login_required
def add_booking():
    form = BookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print("Hello from booking route")
        new_booking = Booking(
            user_id = form.data["user_id"],
            listing_id = form.data["listing_id"],
            start_date = form.data["start_date"],
            end_date = form.data["end_date"],
            cost = form.data["cost"]
        )

        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@booking_routes.route('/<id>', methods = ["DELETE"])
@login_required
def delete_booking(id):
    booking = Booking.query.get(id)
    db.session.delete(booking)
    db.session.commit()
    return ("booking deleted!")
