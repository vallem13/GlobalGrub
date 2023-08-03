import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, thunkCreateCart, updateNewOrders, updateOrderCart, yeetItem } from '../../store/cart';
import { useModal } from '../../context/Modal'


const OrderCartModal = ({ user }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    const cart = useSelector(state => state.cart);
    const restaurant_id = Object.keys(cart)[0]
    const items = Object.values(cart)
    const cart_items = Object.values(items[0])

    let menu_items = []
    cart_items.map(item => menu_items.push(item.id))

    const placeOrder = async (e) => {
        e.preventDefault()
        await dispatch(thunkCreateCart(user.id, restaurant_id, menu_items))
        await dispatch(emptyCart())
        closeModal()
    }

    const cancelOrder = async (e) => {
        e.preventDefault()
        await dispatch(emptyCart())
        closeModal()
    }

    console.log('-------->', cart_items)

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
