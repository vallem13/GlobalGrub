import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderThunk, getAllOrderCartsThunk } from '../../store/cart';
import './UsersOrders.css';

export default function GetOrder() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);
  const all_orders = Object.entries(orders).reverse();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getOrderThunk());
    // dispatch(getAllOrderCartsThunk())
  }, [dispatch]);

  if (Object.keys(orders).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='users-orders-wrapper'>
      <h1>Past Orders</h1>
      <div>
        {all_orders.map(([orderCartId, orderItems]) => (
          <div className='single-order-list' key={orderCartId}>
            <h2>{orderItems[0].restaurant_name}</h2>
            <h3 className='order-number-title'>Order Number: {orderCartId}</h3>
            <div className='items-in-order'>
              {Array.isArray(orderItems) ? (
                orderItems.map((order) => (
                  <div className='order-list-items' key={order.order_id}>
                    <img
                      src={order.menu_item_image}
                      alt={order.menu_item_name}
                      style={{
                        width: '80px',
                        height: '80px',
                        
                      }}
                    />{' '}
                    <h4>
                      {order.menu_item_name} ${Number(order.menu_item_price).toFixed(2)}
                    </h4>
                  </div>
                ))
              ) : (
                <p>No order items available for this order.</p>
              )}
            </div>

            {/* Calculate and display the total for this order */}
            <h3 className='order-total'>
              Total: ${calculateOrderTotal(orderItems).toFixed(2)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function calculateOrderTotal(orderItems) {
  return orderItems.reduce((total, order) => total + Number(order.menu_item_price), 0);
}
