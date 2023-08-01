from flask import Blueprint
from app.models import Restaurant, db


restaurant_routes = Blueprint('restaurant', __name__)

# Get all Restaurants
@restaurant_routes.route('')
def get_all_restaurants():
    restaurants = restaurant.query.all()
    return {'restaurants': [res.to_dict() for res in restaurants]}

# Get Restaurant by ID
@restaurant_routes.route('/<int:id>')
def get_restaurant(id):
    restaurant = restaurant.query.get(id)
    return {'restaurant': restaurant.to_dict()}
