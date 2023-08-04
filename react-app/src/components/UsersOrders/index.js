import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderThunk } from '../../store/cart'


export default function UsersOrders() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.cart.orders);
    const user = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getOrderThunk())
    }, [dispatch])

    return (
        <div>
      <h1>{user.username} Orders</h1>




      {Object.keys(orders).map((orderCartId) => (
        <div key={orderCartId}>
          <h2>Order Cart: {orderCartId}</h2>
          {orders[orderCartId].map((order) => (
            <div key={order.id}>
              <p>Menu Item: {order.menu_item_id}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

}
