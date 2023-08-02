from flask import Blueprint
from app.models import CuisineType, db

cuisine_type_routes = Blueprint('cuisine_type', __name__)


@cuisine_type_routes.route('/')
def get_all_restaurants():
    restaurants = restaurant.query.all()
    return {'restaurants': [res.to_dict() for res in restaurants]}

