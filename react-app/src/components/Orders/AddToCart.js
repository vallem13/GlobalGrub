/*

*the cart should work as a "start your order "
    1. Create Action
    2. Create Thunk so that it fetches correctly with the endpoints in order_cart_routes.py
    3. Create store to reflect the new refs in memory when an order is placed
    4. Create a component that adds to cart by dispatching addToCartThunk + dispatch getCartThunk + which means get a cart thunk???  



*/


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkCreateCart } from '../../store/cart';

const MenuItem = ({ item, onAddToOrder }) => {
    return (
        <div>
            <p>{item.name}</p>
            <button onClick={() => onAddToOrder(item.id)}>Add to Order</button>
        </div>
    );
};

const menuItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

const OrderForm = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const dispatch = useDispatch();

    const handleAddToOrder = (itemId) => {
        if (selectedItems.length < 3) {
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
        }
    };

    const handleSubmitOrder = () => {
        
    const user_id = 1; // Replace with the actual user ID
    const restaurant_id = 123; // Replace with the actual restaurant ID

        // Assuming you have already set up Redux, you can dispatch the thunkCreateCart action here.
        dispatch(thunkCreateCart(user_id, restaurant_id, selectedItems, menuItems))
            .then((data) => {
                console.log("Order submitted successfully:", menuItems);
                // Perform any additional actions after successful order submission if needed
            })
            .catch((error) => {
                console.error("Error submitting order:", error);
                // Handle error if needed
            });
    };


    return (
        <div>
            <h2>Select up to 3 menu items:</h2>
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} onAddToOrder={handleAddToOrder} />
            ))}
            <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
                Submit Order
            </button>
        </div>
    );
};

export default OrderForm;
