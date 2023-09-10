from flask import Blueprint, request
from app.models import Restaurant, db
from app.forms import RestaurantForm, EditRestaurantForm
from flask_login import current_user, login_required
from .aws_helpers import (upload_file_to_s3, get_unique_filename)
from .auth_routes import validation_errors_to_error_messages


restaurant_routes = Blueprint('restaurant', __name__)


# Delete a Restaurant
@restaurant_routes.route('/<int:restaurant_id>', methods=['DELETE'])
@login_required
def delete_restaurant(restaurant_id):

    current_user_id = current_user.to_dict()['id']
    owner_restaurant = Restaurant.query.get(restaurant_id)

    if not owner_restaurant:
        return {'errors': "restaurant not found"}, 400
    if (current_user_id != owner_restaurant.user_id):
        return {'errors': "can only delete your own restaurant"}, 401

    db.session.delete(owner_restaurant)
    db.session.commit()

    return {"message":f"Successfully deleted restaurant {restaurant_id}"}

# Edit a Restaurant
@restaurant_routes.route("/edit/<int:restaurantId>", methods=["PATCH"])
@login_required
def edit_restaurant(restaurantId):
    form = EditRestaurantForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        restaurant = Restaurant.query.get(restaurantId)
        image = form.data["restaurant_image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)
        if "url" not in upload:
            return upload["errors"]
        restaurant.name = form.data["name"]
        restaurant.price_range = form.data["price_range"]
        restaurant.description = form.data["description"]
        restaurant.address = form.data["address"]
        restaurant.city = form.data["city"]
        restaurant.state = form.data["state"]
        restaurant.zipcode = form.data["zipcode"]
        restaurant.contact_phone_number = form.data["contact_phone_number"]
        restaurant.restaurant_image =upload["url"]
        restaurant.cuisine_type_id = form.data["cuisine_type_id"]
        db.session.add(restaurant)
        db.session.commit()
        return restaurant.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401




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
            cuisine_type_id = form.data['cuisine_type_id'],
            user_id = form.data['user_id']
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
