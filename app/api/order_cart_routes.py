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





@order_cart_routes.route('/edit_cart/<int:id>', methods=['PUT'])
@login_required
def edit_cart(id):
    data = request.get_json()

    # if the cart id is not there in the request, throw an error message



    if "cart_id" in data:
        order_id = data["cart_id"]

    else:
        return {'errors': 'Invalid request data'}, 401



    # look for the cart id that matched the data["cart_id"] that was in the request
    current_cart = OrderCart.query.filter_by(order_id=order_id).first()

    # if the current cart that was found in the query is not found or does not belong to the current user, throw an error
    if not current_cart or current_cart.order.user_id != current_user.id:
        return {"error": "Cart not found or user is not authorized"}, 404

    # if the request is add_items, loop through menu items and create a new_order_cart object similar to add items in the post request. The only difference is now we set the new order id that is created to the current order id.

    if "add_items" in data:
        add_items = data["add_items"]
        for menu_item_id in add_items:
            new_order_cart = OrderCart(menu_item_id=menu_item_id, order_id=current_cart.order_id)
            db.session.add(new_order_cart)

    # if remove_items
    if "remove_items" in data:
        remove_items = data["remove_items"]
        for menu_item_id in remove_items:
            cart_item_to_remove = OrderCart.query.filter_by(order_id=current_cart.order_id, menu_item_id=menu_item_id).first()
            if cart_item_to_remove:
                db.session.delete(cart_item_to_remove)

    db.session.commit()

    return {"message": "Cart updated successfully"}, 200





@order_cart_routes.route('/<int:order_cart_id>', methods=['DELETE'])
@login_required
def delete_cart(order_cart_id):

    # current_cart = OrderCart.query.get(order_cart_id)
    current_order = Order.query.filter_by(id=order_cart_id, user_id=current_user.id).first()



    if current_order:
        db.session.delete(current_order)
        # db.session.delete(current_cart)
        db.session.commit()
        return {"message": f'Cart item deleted successfully'}, 200

    else:
        return {"errors": "order cart not found"}
