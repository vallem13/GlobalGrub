from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("menu_items.id")), nullable=False)
    order_cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("order_carts.id")), nullable=False)

    # Relationships go here
    user = db.relationship("User", back_populates="orders")
    menu_items = db.relationship("MenuItem", back_populates="order")
    order_cart = db.relationship("OrderCart", back_populates="orders")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'menu_item_id': self.menu_item_id,
            'order_cart_id ': self.order_cart_id,
            # 'order_cart': self.order_cart.to_dict()
        }
