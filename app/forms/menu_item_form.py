from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField, FloatField, IntegerField
from wtforms.validators import DataRequired, Length


class MenuItemForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    menu_item_image = StringField('menu_item_image', validators=[DataRequired()])
    restaurant_id = IntegerField('restaurant_id', validators=[DataRequired()])
