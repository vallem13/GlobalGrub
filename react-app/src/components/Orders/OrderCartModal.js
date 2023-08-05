import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, thunkCreateCart, updateNewOrders, updateOrderCart, yeetItem } from '../../store/cart';
import { useModal } from '../../context/Modal'


const OrderCartModal = ({ user }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    const cart = useSelector(state => state.cart.cart);
    const current_restaurant = Object.keys(cart)
    const [totalPrice, setTotalPrice] = useState(0);
    const items = Object.values(cart)



    const cart_items = items.length > 0 ? Object.values(items[0]) : [];

    const restaurant_id = parseInt(current_restaurant[0])

    let menu_items = []
    cart_items.map(item => menu_items.push(item.id))

    useEffect(() => {
        let total = 0;
        cart_items.forEach((item) => {
          total += item.price;
        });
        setTotalPrice(total);
      }, [cart_items]);


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
            <h1> {user.firstName}'s Cart</h1>
            {cart_items.map(item => (
                <div key={item.id}>
                    <img src={item.menu_item_image} style={{ width: '50px', height: '50px' }} alt={item.name} />
                    <div>${item.price}</div>
                    <div>{item.name}</div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch(yeetItem(item.id));
                    }}>Delete</button>
                </div>
            ))}
            <div>Total: ${totalPrice}</div>
            <button onClick={placeOrder}>Place Order</button>
            <button onClick={cancelOrder}>Cancel Order</button>
        </div>
    );
};

export default OrderCartModal;
