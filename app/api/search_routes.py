from flask import Blueprint, jsonify, request
from flask_login import login_required

from app.models import Restaurant, db

search_routes = Blueprint('search', __name__)


@search_routes.route("/restaurants")
@login_required
def filter_restaurants_by_price_range():
    price_range = request.args.get('price_range')  # Get the 'price_range' parameter from the query string

    
    if price_range == "$":
        restaurants = Restaurant.query.filter_by(price_range="$").all()

    elif price_range == "$$":
        restaurants = Restaurant.query.filter_by(price_range="$$").all()
    elif price_range == "$$$":
        restaurants = Restaurant.query.filter_by(price_range="$$$").all()
    elif price_range == "$$$$":
        restaurants = Restaurant.query.filter_by(price_range="$$$$").all()
    else:
        
        restaurants = []
    restaurants_data = [restaurant.to_dict() for restaurant in restaurants]
    total_items = len(restaurants)
    return jsonify({"total Restaurants": total_items, "restaurants": restaurants_data})

