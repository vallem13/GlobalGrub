from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateField, SelectField, TextAreaField, FileField, IntegerField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired, ValidationError, EqualTo, Length
from app.models import restaurant
import re


class EditRestaurantForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    price_range = StringField('Price Range')
    description = StringField('Description')
    address = StringField('Address' )
    city = StringField('City' )
    state = StringField('State' )
    zipcode = IntegerField('Zip Code')
    contact_phone_number = StringField('Contact Phone Number')
    restaurant_image = FileField('Profile Image', validators=[ FileAllowed(list(ALLOWED_EXTENSIONS))])
    cuisine_type_id = IntegerField('Cuisine Type')
