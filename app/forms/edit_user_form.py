from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Email
from flask_login import current_user
from app.models import User
import re

def is_valid_email(form, field):
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    email = field.data
    if not re.match(email_pattern, email):
        raise ValidationError('Invalid email address.')

def validate_phone_number(form, field):
    phone_number = field.data
    user = User.query.filter(User.phone_number == phone_number).first()
    if user and current_user.to_dict()["id"] != user.id:
        raise ValidationError('Phone Number is already in use.')


class EditUserForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired()])
    username = StringField('Username', validators=[DataRequired()])
    # password = StringField('password', validators=[DataRequired(), validate_password])
    address = StringField('address', validators=[DataRequired()])
    first_name = StringField('first_name', validators=[DataRequired()])
    phone_number = StringField('phone_number', validators=[DataRequired(), validate_phone_number])
    state = StringField('state', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email()])
    last_name = StringField('last_name', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    zipcode = IntegerField('Zipcode', validators=[DataRequired()])
    # user_profile_icon = StringField('User Profile Icon')
