from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

# Reviews
class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")))

    # Relationships goes here
    user = db.relationship("User", back_populates='reviews')
    restaurant = db.relationship("Restaurant", back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'rating': self.rating,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'user': {
                'id': self.user.id,
                'firstName': self.user.first_name,
                'lastName': self.user.last_name,
            }
        }
