import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { emptyCart, thunkCreateCart, updateNewOrders, updateOrderCart, yeetItem } from '../../store/cart';
import { useModal } from '../../context/Modal'
import './OrderCartModal.css'


const OrderCartModal = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory()
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
        setTotalPrice(total.toFixed(2));
    }, [cart_items]);

    const placeOrder = async (e)=> {
        e.preventDefault()
        await dispatch(thunkCreateCart(user.id, restaurant_id, menu_items))
        await history.push('/user_orders')
        await closeModal()
    }

    const cancelOrder = async (e) => {
        e.preventDefault()
        await dispatch(emptyCart())
        closeModal()
    }

    return (
        <div className="cart-modal">
            <h1> {user.firstName}'s Cart</h1>
            <div className="cart-items-list">
                {cart_items.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.menu_item_image} alt={item.name} />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        <div>
                        <button className='delete-item' onClick={(e) => {
                            e.preventDefault();
                            dispatch(yeetItem(item.id));
                        }}>
                            <i id='fas-fa-trash' className="fas fa-trash" style={{ color: "#f00b51", fontSize: "2rem" }}></i>
                        </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='total-buttons'>
            <div>Total: ${totalPrice}</div>
            <div className='order-place-cancel-buttons'>
            <button className='place-order-button' disabled={cart_items.length < 1} onClick={placeOrder}>Place Order</button>
            <button className='cancel-order-button' onClick={cancelOrder}>Cancel Order</button>
            </div>
            </div>
        </div>
    );
};

export default OrderCartModal;
