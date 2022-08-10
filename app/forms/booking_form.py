from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, DecimalField
from wtforms.validators import DataRequired, ValidationError

validators = [DataRequired()]

class BookingForm(FlaskForm):
    user_id = IntegerField('UserId', validators)
    listing_id = IntegerField('ListingId', validators)
    start_date = DateField('Start Date', validators)
    end_date = DateField('End Date', validators)
    cost = IntegerField('Cost', validators)
    # "cost need to be decimal"

class UpdateBookingForm(FlaskForm):
    id = IntegerField("Booking Id", validators)
    user_id = IntegerField('UserId', validators)
    listing_id = IntegerField('ListingId', validators)
    start_date = DateField('Start Date', validators)
    end_date = DateField('End Date', validators)
    cost = IntegerField('Cost', validators)
    # "cost need to be decimal"
