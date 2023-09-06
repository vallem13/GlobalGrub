from flask import Blueprint, request
from app.models import MenuItem, db
from flask_login import current_user, login_required
from app.forms import MenuItemForm

menu_item_routes = Blueprint('menu_item', __name__)



@menu_item_routes.route('/')
@login_required
def get_menu_items():
    
#query the Post table for all posts
    all_menu_items = MenuItem.query.all()

#loop through the list of posts and return each post as a dictionary 
    menu_item = [item.to_dict() for item in all_menu_items]

    return menu_item


@menu_item_routes.route('/<int:restaurant_id>', methods=['POST'])
# @login_required
def create_menu_item(restaurant_id):

    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # User must have an order from restaurant to make review validation
        # previous_order = Order.query.filter_by(user_id=current_user.id,restaurant_id=id).first()
        # if not previous_order:
        #     return{'errors': "You must have ordered from this restaurant before making a review"}, 403

        new_menu_item = MenuItem(
            name=form.data['name'],
            description=form.data['description'],
            price=form.data['price'],
            menu_item_image_url=form.data['image_url'],
            restaurant_id=restaurant_id,
        )
        db.session.add(new_menu_item)
        db.session.commit()
        return new_menu_item.to_dict(), 201
        # return {"message": f"Successfully added menu item for restaurant {restaurant_id}"}, 201
    return {'errors': "Could not create new menu item"}, 500