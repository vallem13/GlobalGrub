import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderThunk } from '../../store/cart';

export default function UsersOrders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);


  console.log("theses are the orders ----->", orders)

  useEffect(() => {
    dispatch(getOrderThunk());
  }, [dispatch]);



  let total = 0

  return (
    <div>
      <h1>Orders</h1>
      {Object.entries(orders).map(([orderCartId, orderItems]) => (
        <div key={orderCartId}>
          <h2>Order Number: {orderCartId}</h2>
          {orderItems.map((order) => (
            <div key={order.order_id}>

              <h4>{order.menu_item_name}  ${Number(order.menu_item_price).toFixed(2)}</h4>
            </div>
          ))}

         <h4>Total: </h4>
        </div>
      ))}
    </div>
  );
}
