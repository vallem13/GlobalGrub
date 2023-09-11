from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateField, SelectField, TextAreaField, FileField, IntegerField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired, ValidationError, EqualTo, Length
from app.models import restaurant
import re


class EditRestaurantImageForm(FlaskForm):
    restaurant_image = FileField('Profile Image', validators=[ FileAllowed(list(ALLOWED_EXTENSIONS))])

