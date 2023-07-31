from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Email
from flask_login import current_user
from app.models import User


def validate_phone_number(form, field):
    logged_in_user = current_user.to_dict()
    phone_number = field.data
    user = User.query.filter(User.phone_number == phone_number).first()
    if user and (logged_in_user["id"] != user.id):
        raise ValidationError('Phone Number is already in use.')

# def validate_password(form, field):
#     password = field.data
#     user = User.query.get(form.data['id'])
#     if not user:
#         raise ValidationError('User does not exist.')
#     if not user.check_password(password):
#         raise ValidationError('Password was incorrect.')


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
