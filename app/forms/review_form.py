from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    restaurant_id = IntegerField('business_id', validators=[DataRequired()])
