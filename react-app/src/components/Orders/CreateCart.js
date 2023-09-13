import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateCart, updateNewOrders, updateOrderCart } from '../../store/cart';


const StartShoppingButton = () => {

  const dispatch = useDispatch();
  const [restaurant_id, setRestaurantId] = useState('')
  const [menu_items, setmenu_items] = useState('');
  const [isInput, setIsInput] = useState(false);
  const user = useSelector(state => state.session.user);

  const handleStartShopping = async () => {


      const newCartAndOrders = await dispatch(thunkCreateCart(user.id, restaurant_id, menu_items));


      if (newCartAndOrders) {
        const { order_cart: orderCartData, new_orders: newOrdersData } = newCartAndOrders;

        dispatch(updateOrderCart(orderCartData));
        dispatch(updateNewOrders(newOrdersData));

        console.log("Cart and Orders created:", newCartAndOrders);
      } else {
        console.log("Failed to create Cart and Orders");
      }

  };

  const handleClickMe = () => {
    setIsInput(true);
  };

  const handleRestaurantIdInput = (e) => {
    setRestaurantId(e.target.value);
  };
  const handlemMenuInput = (e) => {
    setmenu_items(e.target.value);
  };


  //if input is a truthy ie, it has been clicked open up the input if not "click me"

  return (
    <div>
      {isInput ? (
        <input
          type="text"
          value={restaurant_id}
          onChange={handleRestaurantIdInput}
        />
      ) : (
        <span onClick={handleClickMe}>{restaurant_id || "CLICK ME, I'M A RESTAURANT"}</span>
      )}
      {isInput ? (
        <input
          type="text"
          value={menu_items}
          onChange={handlemMenuInput}
        />
      ) : (
        <span onClick={handleClickMe}>{menu_items || "CLICK ME, I'M A MENU"}</span>
      )}
      <button onClick={handleStartShopping}>
        Start Shopping
      </button>
    </div>
  );
};

export default StartShoppingButton;
