from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
       __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price_range = db.Column(db.String(5), nullable=False) # make sure everyone updates this in their seeds $ $$ $$$$ $$$
    description = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    contact_phone_number = db.Column(db.String(12), nullable=False, unique=True)
    restaurant_image = db.Column(db.String(255), nullable=False)

    #Foreign Keys
    cuisine_type_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("cuisine_types.id")))
    user_id = user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    # Relationships
    reviews = db.relationship('Review', back_populates='restaurant', cascade="all, delete-orphan")
    cuisine_type = db.relationship('CuisineType', back_populates='restaurants')
    order_carts = db.relationship('OrderCart', back_populates='restaurant')
    menu_items = db.relationship('MenuItem', back_populates='restaurant', cascade="all, delete-orphan")
    user = db.relationship('User', back_populates='restaurants')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price_range': self.price_range,
            'description': self.description,
            'address': self.address,
            'city':self.city,
            'state':self.state,
            'zipcode': self.zipcode,
            'contact_phone_number': self.contact_phone_number,
            'restaurant_image': self.restaurant_image,
            'cuisine_type_id': self.cuisine_type_id,
            'user_id': self.user_id,
            'user': {
                'id': self.user.id,
                'firstName': self.user.first_name,
                'lastName': self.user.last_name,
            },
            'menu_items': [item.to_dict() for item in self.menu_items],
            'reviews': [review.to_dict() for review in self.reviews],
            'average_rating': self.average_rating
        }

    @property
    def average_rating(self):
        if not self.reviews:
            return None
        total_ratings = sum(review.rating for review in self.reviews)
        return total_ratings / len(self.reviews) if len(self.reviews) > 0 else None
