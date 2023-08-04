import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderThunk } from '../../store/cart'


export default function UsersOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch('/get_order_details');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    return (
        <div>
            <h1>All Order Details</h1>
            {Object.entries(orders).map(([orderId, orderDetails]) => (
                <div key={orderId}>
                    <h3>Order ID: {orderId}</h3>
                    <ul>
                        {orderDetails.map((order) => (
                            <li key={order.menu_item_id}>
                                Restaurant: {order.restaurant_name}, User ID: {order.user_id}, Menu Item: {order.menu_item_name}, Price: {order.menu_item_price}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

}
