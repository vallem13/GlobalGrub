from flask import Blueprint, jsonify, request
from flask_login import login_required, logout_user, current_user
from .auth_routes import auth_routes
from app.models import User, db
from app.forms import EditUserForm


user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

# DELETE user by ID
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):

    if id > 5: # Protection for seeds
        user = User.query.get(id)

        if user.id:
            db.session.delete(user)
            db.session.commit()
            logout_user()
            return {'message': 'User deleted successfully'}, 200
    return {'error': 'Unauthorized'}, 403

# Edit a User
@user_routes.route('/update/<int:id>', methods=['PUT'])
@login_required
def edit_user(id):
    # input edit form here
    form = EditUserForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if id > 5 and form.validate_on_submit():
        # print("THIS IS USER", User)
        user = User.query.get(id)
        # print('------> user', user)

        if user.id: # == current_user.to_dict()["id"]:
            user.email = form.data['email']
            user.phone_number = form.data['phone_number']
            user.first_name = form.data['first_name']
            user.username = form.data['username']
            user.last_name = form.data['last_name']
            user.address = form.data['address']
            user.city = form.data['city']
            user.state = form.data['state']
            user.zipcode = form.data['zipcode']
            # user.user_profile_icon = form.data['user_profile_icon']
            db.session.commit()
            return user.to_dict()

    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

