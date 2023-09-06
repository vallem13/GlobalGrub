from flask import Blueprint
from app.models import MenuItem, db
from flask_login import current_user, login_required

menu_item_routes = Blueprint('menu_item', __name__)
