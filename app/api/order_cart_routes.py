from flask import Blueprint, request, jsonify
from app.models import OrderCart,db, Order, Restaurant, MenuItem, User
from flask_login import current_user, login_required

order_cart_routes = Blueprint('cart', __name__)

# @order_cart_routes.route("/get_order_details")
# @login_required
# def get_all_orders_details():
#     orders = Order.query\
#         .join(User, Order.user_id == User.id)\
#         .join(Restaurant, Order.restaurant_id == Restaurant.id)\
#         .outerjoin(OrderCart, Order.id == OrderCart.order_id)\
#         .outerjoin(MenuItem, OrderCart.menu_item_id == MenuItem.id)\
#         .add_columns(
#             Order.id.label("order_id"),
#             User.id.label("user_id"),
#             Restaurant.id.label("restaurant_id"),
#             Restaurant.name.label("restaurant_name"),
#             MenuItem.id.label("menu_item_id"),
#             MenuItem.name.label("menu_item_name"),
#             MenuItem.price.label("menu_item_price")
#         )\
#         .all()
#     all_orders_dict = {}
#     for order in orders:
#         order_id = order.order_id
#         user_id = order.user_id
#         restaurant_id = order.restaurant_id
#         restaurant_name = order.restaurant_name
#         if order.menu_item_id:
#             menu_item_id = order.menu_item_id
#             menu_item_name = order.menu_item_name
#             menu_item_price = order.menu_item_price
#         else:
#             menu_item_id = None
#             menu_item_name = None
#             menu_item_price = None
#         order_details = {
#             "order_id": order_id,
#             "user_id": user_id,
#             "restaurant_id": restaurant_id,
#             "restaurant_name": restaurant_name,
#             "menu_item_id": menu_item_id,
#             "menu_item_name": menu_item_name,
#             "menu_item_price": menu_item_price
#         }
#         if order_id in all_orders_dict:
#             all_orders_dict[order_id].append(order_details)
#         else:
#             all_orders_dict[order_id] = [order_details]
#     return jsonify(all_orders_dict)


@order_cart_routes.route('/user_orders')
@login_required
def get_orders():

    user_orders = Order.query.filter_by(user_id=current_user.id).all()

    orders_dict = {}
    for order in user_orders:
        order_id = order.order_cart_id
        order_data = {
            'id': order.id,
            'user_id': order.user_id,
            'menu_item_id': order.menu_item_id,
            'order_cart_id': order.order_cart_id,
        }

        if order_id in orders_dict:
            orders_dict[order_id].append(order_data)
        else:
            orders_dict[order_id] = [order_data]

    return jsonify(orders_dict), 200


@order_cart_routes.route("/<int:user_id>", methods=["POST"])
@login_required
def create_order(user_id):
    data = request.get_json()
    print("is this data", data)

    create_order_cart = OrderCart(restaurant_id=data["restaurant_id"], user_id=user_id)
    db.session.add(create_order_cart)
    db.session.commit()

    cart_id = create_order_cart.id

    new_orders = [Order(user_id=user_id, menu_item_id=menu_item_id, order_cart_id=cart_id) for menu_item_id in data["menu_items"]]
    print("THIS IS A NEW ORDER", type(new_orders))
    db.session.add_all(new_orders)
    db.session.commit()

    new_orders_data = [order.to_dict() for order in new_orders]

    order_cart_data = create_order_cart.to_dict()

    return jsonify({
        'order_cart': order_cart_data,
        'new_orders': new_orders_data,
    }), 200




@order_cart_routes.route('/<int:order_id>', methods=['DELETE'])
@login_required

def remove_order(order_id):


    order_to_remove = Order.query.get(order_id)
    if not order_to_remove or order_to_remove.user_id != current_user.id:
        return jsonify({"errors": "order not found or user is not authorized"}) , 404

    db.session.delete(order_to_remove)
    db.session.commit()

    return jsonify({"message": "Order succesfully deleted "}) , 200



@order_cart_routes.route('/delete/<int:order_cart_id>', methods=['DELETE'])
@login_required

def delete_cart(order_cart_id):

    delete_cart = OrderCart.query.get(order_cart_id)
    if not delete_cart or delete_cart.user_id != current_user.id:
        return jsonify({"errors": "order cart not found or user is not authorized"}) , 404

    db.session.delete(delete_cart)
    db.session.commit()

    return jsonify({"message": "Order cart succesfully deleted "}) , 200
