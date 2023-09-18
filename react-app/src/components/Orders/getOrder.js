import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderThunk } from '../../store/cart';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './UsersOrders.css';
import { getAllReviewsThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';

export default function GetOrder() {
  const dispatch = useDispatch();
  const history = useHistory()
  const orders = useSelector((state) => state.cart.orders);
  const all_orders = Object.entries(orders).reverse();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getOrderThunk());
  }, [dispatch]);

  if (Object.keys(orders).length === 0) {
    return <div>Loading...</div>;
  }

  function calculateOrderTotal(orderItems) {
    if (!Array.isArray(orderItems)) return 0;
    return orderItems.reduce((total, order) => total + Number(order.menu_item_price), 0);
  }

  const onClick = async (restaurantId) => {
    dispatch(getSingleRestaurantThunk(restaurantId))
    await history.push(`/restaurant/${restaurantId}`);
    // window.location.reload();
  };

  return (
    <div className="manage-restaurants-page">
      <div className="title-create-container">
        <h1>Orders History</h1>
      </div>
      {all_orders.length < 1 ? (<div className="title-create-container">
        <h3>You have not placed any orders yet!</h3>
      </div>) : (
        <div className="restaurant-cards-buttons-container">
          {all_orders.map(([orderCartId, orderItems]) => (
            <div className="single-restaurant-cards-buttons" key={orderCartId}>
              <div className='single-restaurant-card'>
                <div className='image-button-container'>
                  <img
                    className='restaurant-image'
                    src={orderItems[0]?.restaurant_image}
                    alt="Restaurant" />
                </div>
                <div className='single-restaurant-info'>
                  <div>
                    <h4 className='title'>Restaurant: </h4>
                    <h4>{orderItems[0]?.restaurant_name}</h4>
                  </div>
                  <div>
                    <h4 className='title'>Order Number: </h4>
                    <h4> {orderCartId}</h4>
                  </div>
                  <div>
                    <h4 className='title'>Order Details: </h4>
                    <h4> {Array.isArray(orderItems) && (
                      orderItems.map((order) => (
                        <div className='order-list-items' key={order.order_id}>
                          <h4>
                            {order.menu_item_name} ${Number(order.menu_item_price).toFixed(2)}
                          </h4>
                        </div>
                      ))
                    )}</h4>
                  </div>
                  <div>
                    <h4 className='title'>Total: </h4>
                    <h4> ${calculateOrderTotal(orderItems).toFixed(2)}</h4>
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <button onClick={() => onClick(orderItems[0].restaurant_id)}>Review Restaurant</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
