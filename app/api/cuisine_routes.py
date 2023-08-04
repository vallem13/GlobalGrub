from flask import Blueprint, jsonify
from flask_login import current_user, login_required

from app.models import CuisineType, db

cuisine_routes = Blueprint('cuisine_type', __name__)


@cuisine_routes.route('')
@login_required
def get_all_cuisines():
    cuisines = CuisineType.query.all()
    return [cuisine.to_dict() for cuisine in cuisines]


@cuisine_routes.route('/<int:id>')
def get_single_cuisines(id):
    cuisine = CuisineType.query.get(id)
    return cuisine.to_dict()