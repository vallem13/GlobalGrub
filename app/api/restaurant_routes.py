from flask import Blueprint, jsonify
from app.models import Restaurant, db


restaurant_routes = Blueprint('restaurant', __name__)

# Get all Restaurants
@restaurant_routes.route('')
def get_all_restaurants():
    restaurants = restaurants.query.all()
    return {'restaurants': [res.to_dict() for res in restaurants]}

# Get Restaurant by ID
@restaurant_routes.route('/<int:id>')
def get_restaurant(id):
    restaurant = restaurant.query.get(id)
    return {'restaurant': restaurant.to_dict()}

#Get Restaurant by Cuisine Type 

# @restaurant_routes.route('/<int:cuisine_type_id>/restaurants')
# def get_restaurant_cuisine(cuisine_type_id):
#     restaurants = Restaurant.query.filter_by(cuisine_type_id=cuisine_type_id).all()
#     print("This is restaurant", restaurants)
#     restaurants_data = [restaurant.to_dict() for restaurant in restaurants]
#     return jsonify(restaurants_data)

