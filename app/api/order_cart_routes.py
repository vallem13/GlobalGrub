from flask import Blueprint, request, jsonify
from app.models import OrderCart,db, Order, Restaurant, MenuItem, User
from flask_login import current_user, login_required


order_cart_routes = Blueprint('cart', __name__)


@order_cart_routes.route("/get_order_details")
@login_required
def get_all_orders_details():

    orders = Order.query\
        .join(User, Order.user_id == User.id)\
        .join(Restaurant, Order.restaurant_id == Restaurant.id)\
        .outerjoin(OrderCart, Order.id == OrderCart.order_id)\
        .outerjoin(MenuItem, OrderCart.menu_item_id == MenuItem.id)\
        .add_columns(
            Order.id.label("order_id"),
            User.id.label("user_id"),
            User.username.label("username"),
            Restaurant.id.label("restaurant_id"),
            Restaurant.name.label("restaurant_name"),
            MenuItem.id.label("menu_item_id"),
            MenuItem.name.label("menu_item_name"),
            MenuItem.price.label("menu_item_price")
        )\
        .all()

    all_orders_dict = {}
    for order in orders:
        order_id = order.order_id
        user_id = order.user_id
        username = order.username
        restaurant_id = order.restaurant_id
        restaurant_name = order.restaurant_name
        if order.menu_item_id:

            menu_item_id = order.menu_item_id
            menu_item_name = order.menu_item_name
            menu_item_price = order.menu_item_price
        else:

            menu_item_id = None
            menu_item_name = None
            menu_item_price = None
        order_details = {
            "order_id": order_id,
            "user_id": user_id,
            "username": username,
            "restaurant_id": restaurant_id,
            "restaurant_name": restaurant_name,
            "menu_item_id": menu_item_id,
            "menu_item_name": menu_item_name,
            "menu_item_price": menu_item_price
        }

        if order_id in all_orders_dict:
            all_orders_dict[order_id].append(order_details)
        else:
            all_orders_dict[order_id] = [order_details]
    return jsonify(all_orders_dict)



@order_cart_routes.route('/', methods=['POST'])
@login_required
def add_to_cart():

    data = request.get_json()

    if current_user.id != data["user_id"]:
        return {'errors': 'User is not authorized for this request'}, 401

   #Adds new Order's to the database using the User ID and the Restaurant ID
    new_order = Order(user_id=data["user_id"], restaurant_id=data["restaurant_id"])
    db.session.add(new_order)
    db.session.commit()



    new_cart_id = Order.query.filter(Order.user_id == data["user_id"], Order.restaurant_id == data["restaurant_id"]).order_by(Order.id.desc()).first().id
    for menu_item_id in data["menu_item_id"]:
        new_order_cart = OrderCart(menu_item_id=menu_item_id, order_id=new_cart_id)
        db.session.add(new_order_cart)

    db.session.commit()

    return {"message": f'Successfully added order for user {current_user.id}'}, 200




@order_cart_routes.route('/<int:order_cart_id>', methods=['DELETE'])
@login_required
def delete_cart(order_cart_id):

    current_cart = OrderCart.query.get_or_404(order_cart_id)

    db.session.delete(current_cart)
    db.session.commit()

    return {"message": f'Cart item deleted successfully'}, 200
