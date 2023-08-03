from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class CuisineType(db.Model):
    __tablename__ = "cuisine_types"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(25), nullable=False)
    # cuisine_logo = db.Column(db.String(255), nullable=False)

    restaurants = db.relationship('Restaurant', back_populates='cuisine_type')

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            # 'cuisine_logo': self.cuisine_logo
           'restaurants': [restaurant.to_dict() for restaurant in self.restaurants]
        }