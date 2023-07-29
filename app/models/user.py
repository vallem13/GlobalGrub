from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone_number = db.Column(db.String(20), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    last_name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    user_profile_icon = db.Column(db.String(255))

    reviews = db.relationship('Review', back_populates="user")
    orders = db.relationship('Order', back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'phoneNumber': self.phone_number,
            'firstName':self.first_name,
            'lastName':self.last_name,
            'address':self.address,
            'city':self.city,
            'state':self.state,
            'zipcode': self.zipcode,
            'username': self.username,
            'hashed_password': self.hashed_password,
            'user_profile_icon': self.user_profile_icon
        }
