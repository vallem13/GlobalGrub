from flask import Blueprint, request
from app.models import Restaurant, db
from app.forms import RestaurantForm
from flask_login import current_user, login_required
from .aws_helpers import (upload_file_to_s3, get_unique_filename)
from .auth_routes import validation_errors_to_error_messages


restaurant_routes = Blueprint('restaurant', __name__)


# Create a Restaurant
@restaurant_routes.route('/new-restaurant', methods=['POST'])
@login_required
def createRestaurant():

    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        image = form.data["restaurant_image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if 'url' not in upload:
            return upload['errors']

        restaurant  = Restaurant(
            name = form.data['name'],
            price_range = form.data['price_range'],
            description = form.data['description'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            zipcode = form.data['zipcode'],
            contact_phone_number = form.data['contact_phone_number'],
            restaurant_image =upload['url'],
        )

        db.session.add(restaurant)
        db.session.commit()
        return restaurant.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Get all Restaurants
@restaurant_routes.route('/')
def get_all_restaurants():
    restaurants = Restaurant.query.all()
    return [res.to_dict() for res in restaurants]

# Get Restaurant by ID
@restaurant_routes.route('/<int:id>')
def get_restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()
