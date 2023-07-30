from flask import Blueprint, jsonify
from flask_login import login_required, logout_user, current_user
from .auth_routes import auth_routes
from app.models import User, db
from app.forms import EditUserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

# Get a User by ID
@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

# GET all users
@user_routes.route('/')
@login_required
def get_all_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

# Edit a User
@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_user(id):
    # input edit form here
    form = EditUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = User.query.get(id)

        if current_user.is_authenticated:
            if user.id == current_user.to_dict()["id"]:
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

# DELETE user by ID
@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_user(id):
    user = User.query.get(id)

    if current_user.is_authenticated:
        db.session.delete(user)
        db.session.commit()
        return {'message': 'User deleted successfully'}, 200
    else:
        return {'error': 'Failed to delete user'}, 404
