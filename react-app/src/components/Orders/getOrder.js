import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderThunk } from "../../store/cart";
import { useEffect } from "react";

const GetOrder = () => {
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
};
 
export default GetOrder