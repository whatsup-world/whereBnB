from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

validators = [DataRequired()]

class ListingImageForm(FlaskForm):
    listing_id = IntegerField('ListingId', validators)
    image_url = TextAreaField('image_url', validators)
