from flask import Blueprint, jsonify

from app.models import CuisineType, db

cuisine_routes = Blueprint('cuisine', __name__)


@cuisine_routes.route('/')
def get_all_cuisines():
    cuisine = CuisineType.query.all()
    print(type(cuisine))
    cuisine_list = [cuisine.to_dict() for cuisine in cuisine]
    return jsonify(cuisine_list)

@cuisine_routes.route('/<int:id>')
def get_single_cuisines(id):
    cuisine = CuisineType.query.get(id)
    if cuisine:
        return jsonify(cuisine.to_dict())
    else: return jsonify("not working")
