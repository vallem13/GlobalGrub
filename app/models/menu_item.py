from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Float, nullable=False)
    menu_item_image = db.Column(db.String(1000), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")))


    # Relationship goes here
    restaurant = db.relationship("Restaurant", back_populates='menu_items')
    order_cart = db.relationship("OrderCart", back_populates='menu_items')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'menu_item_image': self.menu_item_image,
            'restaurant_id': self.restaurant_id
        }
