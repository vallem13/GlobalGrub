from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class OrderCart(db.Model):
    __tablename__ = 'order_carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    menu_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("menu_items.id")), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("orders.id")), nullable=False)

    # Relationships go here
    menu_items = db.relationship("MenuItem", back_populates="order_cart")
    order = db.relationship("Order", back_populates="order_cart")

    def to_dict(self):
        return {
            'id': self.id,
            'menu_item_id': self.menu_item_id,
            'order_id': self.order_id
        }
