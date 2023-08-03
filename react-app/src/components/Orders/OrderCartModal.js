import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, thunkCreateCart, updateNewOrders, updateOrderCart, yeetItem } from '../../store/cart';
import { useModal } from '../../context/Modal'


const OrderCartModal = ({ user }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    const cart = useSelector(state => state.cart.cart);
    console.log('-------->1', cart)
    const current_restaurant = Object.keys(cart)
    const items = Object.values(cart)
    console.log("this is the items", items)
    const cart_items = items.length > 0 ? Object.values(items[0]) : [];
    console.log("this is the cart items", cart_items)
    const restaurant_id = parseInt(current_restaurant[0])

    let menu_items = []
    cart_items.map(item => menu_items.push(item.id))
    console.log("this is the menu items", menu_items)
    console.log("this is the restaurant_id", restaurant_id)
    console.log("this is the user id", user.id)

    const placeOrder = async (e) => {
        e.preventDefault()
        await dispatch(thunkCreateCart(user.id, restaurant_id, menu_items))
        closeModal()
    }

    const cancelOrder = async (e) => {
        e.preventDefault()
        await dispatch(emptyCart())
        closeModal()
    }



    return (
        <div>
            <h1> testing </h1>
            {cart_items.map(item => (
                <div>
                    <img src={item.menu_item_image} style={{ width: '50px', height: '50px' }} alt={item.name} />
                    <div>${item.price}</div>
                    <div>{item.name}</div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch(yeetItem(item.id));
                    }}>Delete</button>
                </div>
            ))}
            <button onClick={placeOrder}>Place Order</button>
            <button onClick={cancelOrder}>Cancel Order</button>
        </div>
    );
};

export default OrderCartModal;
