from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField, FloatField, IntegerField, FileField
from wtforms.validators import DataRequired, Length
from ..api.aws_helpers import ALLOWED_EXTENSIONS
from flask_wtf.file import FileField, FileAllowed, FileRequired


class EditMenuItemImageForm(FlaskForm):
    menu_item_image = FileField("menu_item_image",  validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
