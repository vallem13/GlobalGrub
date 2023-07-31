from flask import Blueprint, request
from app.models import OrderCart,db, Order
from flask_login import current_user, login_required


order_cart_routes = Blueprint('cart', __name__)


# Add menu_items to cart
@order_routes.route('', methods=['POST'])
@login_required
def add_to_cart():

    # this ensures that the user can only modify their own cart
    data = request.get_json()

    if (current_user.id != data["user_id"]):
        return {'errors': 'User is not authorized for this request'}, 401

    # Create new Order)
    new_order = Order(user_id=data["user_id"], restaurant_id=data["restaurant_id"])
    db.session.add(new_order)
    db.session.commit()

    # Query for the new Cart ID
    access_new_order = Order.query.filter(Order.user_id == data["user_id"], Order.restaurant_id == data["restaurant_id"])

    for id in data["menu_item_id"]:
        new_order = OrderCart(user_id=current_user.id, menu_item_id=id, order_id=access_new_order)
        db.session.add(access_new_order)
    db.session.commit()

    return {"message": f'Successfully added order for user {current_user.id}'}, 200


@order_routes.route('/<int:order_cart.id>', methods=['DELETE'])
@login_required
def delete_cart(order_cart.id):

    current_cart = OrderCart.query.get_or_404(order_cart.id)

    db.session.delete(current_cart)
    db.session.commit()

    return {"message": f'Cart item deleted successfully'}, 200
