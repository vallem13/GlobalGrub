from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, SubmitField, SubmitField, FloatField, IntegerField, FileField
from wtforms.validators import DataRequired, Length
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class MenuItemForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    # menu_item_image = FileField("menu_item_image",  validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    menu_item_image = StringField('menu_item_image', validators=[DataRequired()])
    restaurant_id = IntegerField('restaurant_id', validators=[DataRequired()])
    submit = SubmitField("Create Menu Item")