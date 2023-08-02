from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class OrderCart(db.Model):
    __tablename__ = 'order_carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")))

    # menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("menu_items.id")), nullable=False)
    # order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("orders.id")), nullable=False)

    # Relationships go here
    user = db.relationship("User", back_populates="order_carts")
    restaurant = db.relationship("Restaurant", back_populates="order_carts")
    # menu_items = db.relationship("MenuItem", back_populates="order_cart")
    orders = db.relationship("Order", back_populates="order_cart",  cascade="all, delete-orphan")



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            # 'orders': [order.to_dict() for order in self.orders]
        }
