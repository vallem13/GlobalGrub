from flask import Blueprint, request, jsonify
from app.models import OrderCart,db, Order
from flask_login import current_user, login_required


order_cart_routes = Blueprint('cart', __name__)

#Get All Orders for user 

# @order_cart_routes.route('/<int:user_id>/get_orders')
# @login_required
# def get_user_orders(user_id):

#     data = request.get_json()
     
#   # Import the Order model here
#     user_orders = Order.query.filter_by(user_id=user_id).all()
#     customer_order = Order.query.filter_by(user_id=user_id).first()
#     order_cart_id = OrderCart.query.filter_by(order_id=customer_order.id).all()


#     orders_data = []
#     for order in user_orders:
#         orders_data.append({
#             'order_id': order.id,
#             'menu_item_id': order.menu_item_id
            
# })
#     orders_cart_data = []
#     for order in order_cart_id:
#         orders_data.append({
#             'order_id': order.id,
           
            
# })
  
        
#         print("THIS IS THE ORDER CART ID ----->", order_cart_id)
        
#         return jsonify(orders_data), 200


@order_cart_routes.route("/get_order_details/<int:order_id>")
@login_required
def get_order_details(order_id):
    # Query the Order by its ID and include the related OrderCart objects using "order_cart" relationship
    order = Order.query.get(order_id)

    if order:
        # Access the OrderCart objects associated with the Order
        order_carts = order.order_cart

        # Create a list to store the menu_item_ids from the OrderCart objects
        menu_item_ids = []

        # Loop through each OrderCart object to retrieve the menu_item_id
        for order_cart in order_carts:
            menu_item_ids.append(order_cart.menu_item_id)

        return jsonify({
            "order_id": order.id,
            "user_id": order.user_id,
            "restaurant_id": order.restaurant_id,
            "menu_item_ids": menu_item_ids
        })

    return jsonify({"message": "Order not found"}), 404










@order_cart_routes.route("/get_order_details")
@login_required
def get_all_orders_details():
    # Query all orders and their related data using JOINs
    orders = Order.query \
        .join(User, Order.user_id == User.id) \
        .join(Restaurant, Order.restaurant_id == Restaurant.id) \
        .outerjoin(OrderCart, Order.id == OrderCart.order_id) \
        .outerjoin(MenuItem, OrderCart.menu_item_id == MenuItem.id) \
        .add_columns(
            Order.id.label("order_id"),
            User.id.label("user_id"),
            User.username.label("username"),
            Restaurant.id.label("restaurant_id"),
            Restaurant.name.label("restaurant_name"),
            MenuItem.id.label("menu_item_id"),
            MenuItem.name.label("menu_item_name"),
            MenuItem.price.label("menu_item_price")
        ) \
        .all()
    # Organize the data into a dictionary
    all_orders_details = {}
    for order in orders:
        order_id = order.order_id
        user_id = order.user_id
        username = order.username
        restaurant_id = order.restaurant_id
        restaurant_name = order.restaurant_name
        if order.menu_item_id:
            # If there is a menu item associated with the order, add its details
            menu_item_id = order.menu_item_id
            menu_item_name = order.menu_item_name
            menu_item_price = order.menu_item_price
        else:
            # If there is no menu item associated with the order, set menu_item_id to None
            menu_item_id = None
            menu_item_name = None
            menu_item_price = None
        if order_id not in all_orders_details:
            all_orders_details[order_id] = {
                "order_id": order_id,
                "user_id": user_id,
                "username": username,
                "restaurant_id": restaurant_id,
                "restaurant_name": restaurant_name,
                "items": []
            }
        all_orders_details[order_id]["items"].append({
            "menu_item_id": menu_item_id,
            "menu_item_name": menu_item_name,
            "menu_item_price": menu_item_price
        })
    return jsonify(list(all_orders_details.values()))









# Add menu_items to cart
@order_cart_routes.route('/', methods=['POST'])
@login_required
def add_to_cart():

    # this ensures that the user can only modify their own cart
    data = request.get_json()

#Auth error is working 

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
