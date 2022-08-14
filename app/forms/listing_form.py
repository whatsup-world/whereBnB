from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired, ValidationError

validators = [DataRequired()]

class ListingForm(FlaskForm):
    user_id = IntegerField('UserId', validators)
    address = StringField('Address', validators)
    city = StringField('City', validators)
    state = StringField('State', validators)
    zip = IntegerField('Zip Code', validators)
    category = StringField('Category')
    description = TextAreaField('Description', validators)
    price = IntegerField('Price', validators)
    cover_img = StringField('Cover_img', validators)

class UpdateListingForm(FlaskForm):
    id = IntegerField("Listing Id", validators)
    user_id = IntegerField('UserId', validators)
    address = StringField('Address', validators)
    city = StringField('City', validators)
    state = StringField('State', validators)
    zip = IntegerField('Zip Code', validators)
    category = StringField('Category')
    description = TextAreaField('Description', validators)
    price = IntegerField('Price', validators)
    cover_img = StringField('Cover_img', validators)
