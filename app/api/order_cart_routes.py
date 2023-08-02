from flask import Blueprint, request, jsonify
from app.models import OrderCart,db, Order, Restaurant, MenuItem, User
from flask_login import current_user, login_required

order_cart_routes = Blueprint('cart', __name__)




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
            'order_cart_id': order.order_cart_id
        }

        # Append the order details to the respective list in the dictionary
        if order_id in orders_dict:
            orders_dict[order_id].append(order_data)
        else:
            orders_dict[order_id] = [order_data]

    return jsonify(orders_dict), 200


#

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

    # Convert the new_orders list to a list of dictionaries using the to_dict() method
    new_orders_data = [order.to_dict() for order in new_orders]

    # Convert the order_cart to a dictionary using the to_dict() method
    order_cart_data = create_order_cart.to_dict()

    return jsonify({
        'order_cart': order_cart_data,
        'new_orders': new_orders_data,
    }), 200

#split the two queries into two differnt routes

# @order_cart_routes.route("/create_cart/<int:user_id>", methods=["POST"])

# def start_shopping(user_id):
#     data = request.get_json()




#     create_order_cart = OrderCart(user_id=user_id, restaurant_id=data["restaurant_id"])
#     if create_order_cart.user_id != current_user.id:
#         return jsonify({"errors": "user is not authorized"}) , 404

#     db.session.add(create_order_cart)
#     db.session.commit()

#     return jsonify({"cart_id": create_order_cart.id}), 200

# @order_cart_routes.route("/create_order/<int:user_id>/<int:cart_id>", methods=["POST"])
# def create_order(user_id, cart_id):
#     data = request.get_json()



#     new_orders = [Order(user_id=user_id, menu_item_id=menu_item_id, order_cart_id=cart_id) for menu_item_id in data["menu_items"]]
#     db.session.add_all(new_orders)
#     db.session.commit()

#     return jsonify({"message": "Successfully added"}), 200




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


















































































