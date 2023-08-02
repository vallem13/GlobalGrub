import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateCart } from '../../store/cart';




const StartShoppingButton = () => {
  const dispatch = useDispatch();
  //make sure that the restaurant id only takes in an integer and not a string, also user should not input this
  const [restaurant_id, setRestaurantId] = useState('')
  const [menu_item_id, setMenuItemId] = useState('');
  const [isInput, setIsInput] = useState(false);
  const user = useSelector(state => state.session.user);
  const cart = useSelector(state =>  Object.values(state.cart));

console.log("this is the cart!", cart)
  const handleStartShopping = async () => {


      const newCart = await dispatch(thunkCreateCart(user.id, restaurant_id, menu_item_id));


      if (newCart) {
        console.log("CART ID NUMBER ------->", newCart, "<----- WAS CREATED")
      } else {
        console.log("CART CAN NOT BE CREATED AT THIS TIME :'(")
      }

  };

  const handleClickMe = () => {
    setIsInput(true);
  };

  const handleRestaurantIdInput = (e) => {
    setRestaurantId(e.target.value);
  };
  const handlemMenuInput = (e) => {
    setMenuItemId(e.target.value);
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
          value={menu_item_id}
          onChange={handlemMenuInput}
        />
      ) : (
        <span onClick={handleClickMe}>{menu_item_id || "CLICK ME, I'M A MENU"}</span>
      )}
      <button onClick={handleStartShopping}>
        Start Shopping
      </button>
    </div>
  );
};

export default StartShoppingButton;
