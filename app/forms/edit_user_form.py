from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Email
from flask_login import current_user
from app.models import User

def validate_user_exists(form, field):
    logged_in_user = current_user.to_dict()
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user and (logged_in_user["id"] != user.id):
        raise ValidationError('Email address is already in use.')

def validate_phone_number(form, field):
    logged_in_user = current_user.to_dict()
    phone_number = field.data
    user = User.query.filter(User.phone_number == phone_number).first()
    if user and (logged_in_user["id"] != user.id):
        raise ValidationError('Phone Number is already in use.')

def validate_username(form, field):
    logged_in_user = current_user.to_dict()
    username = field.data
    user = User.query.filter_by(User.username == username).first()
    if user and (logged_in_user["id"] != user.id):
        raise ValidationError('Username already in use.')

# def validate_email(form, field):
#     if field.data != current_user.email:
#         user = User.query.filter_by(email=field.data).first()
#         if user:
#             raise ValidationError('Email already in use.')

def validate_email(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def validate_password(form, field):
    password = field.data
    user = User.query.get(form.data['id'])
    if not user:
        raise ValidationError('User does not exist.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class EditUserForm(FlaskForm):
    id = IntegerField('id', validators=[DataRequired()])
    username = StringField('Username', validators=[DataRequired(), validate_username])
    password = StringField('password', validators=[DataRequired(), validate_password])
    address = StringField('address', validators=[DataRequired()])
    first_name = StringField('first_name', validators=[DataRequired()])
    phone_number = StringField('phone_number', validators=[DataRequired(), validate_phone_number])
    state = StringField('state', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), validate_email])
    last_name = StringField('last_name', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    zipcode = IntegerField('Zipcode', validators=[DataRequired()])
    # user_profile_icon = StringField('User Profile Icon')
    # submit = SubmitField('Update')
