import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderThunk } from '../../store/cart';

export default function GetOrder() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);
  const all_orders = Object.entries(orders)

  useEffect(() => {
    dispatch(getOrderThunk());
  }, [dispatch]);

  console.log("-------->", all_orders);

  if (Object.keys(orders).length === 0) {
    return <div>Loading...</div>; // Handle the initial loading state
  }

  // Calculate the total price of all orders
  // let total = 0;
  // Object.values(orders).forEach((orderItems) => {
  //   orderItems.forEach((order) => {
  //     total += Number(order.menu_item_price);
  //   });
  // });

  if (Object.keys(orders).length === 0) {
    return <div>Loading...</div>; // Handle the initial loading state
  }

  return (
    <div>
      <h1>Orders</h1>
      {all_orders.map(([orderCartId, orderItems]) => (
        <div key={orderCartId}>
          <h2>Order Number: {orderCartId}</h2>
          {Array.isArray(orderItems) ? (
            orderItems.map((order) => (
              <div key={order.order_id}>
                <h4>
                  {order.menu_item_name} ${Number(order.menu_item_price).toFixed(2)}
                </h4>
              </div>
            ))
          ) : (
            <p>No order items available for this order.</p>
          )}
        </div>
      ))}
    </div>
  );
};
