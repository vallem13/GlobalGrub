from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class EditReviewForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
