from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def is_valid_email(form, field):
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    email = field.data
    if not re.match(email_pattern, email):
        raise ValidationError('Invalid email address.')

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, is_valid_email])
    password = StringField('password', validators=[DataRequired()])
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    zipcode = IntegerField('Zip Code', validators=[DataRequired()])
    phone_number = StringField('Phone Number', validators=[DataRequired()])