from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateField, SelectField, TextAreaField, FileField, IntegerField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired, ValidationError, EqualTo, Length
from app.models import restaurant
import re


class RestaurantForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    price_range = StringField('Price Range', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    zipcode = IntegerField('Zip Code', validators=[DataRequired()])
    contact_phone_number = StringField('Contact Phone Number', validators=[DataRequired()])
    restaurant_image = FileField('Profile Image', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    cuisine_type_id = IntegerField('Cuisine Type', validators=[DataRequired()])
    user_id = IntegerField('User', validators=[DataRequired()])
