
//actions
const ADD_TO_CART = "cart/ADD_TO_CART";
const CLEAR_CART = "cart/CLEAR_CART"

//action creator
const addToCart = (menuItem) => ({
  type: ADD_TO_CART,
  menuItem
})


const clearCart = (menuItem) => ({
  type: CLEAR_CART,
  menuItem
})






//thunk

export const thunkCartItems = (orderId, menuItem) => async (dispatch) => {
  const response = await fetch("/api/cart" , {
    method: "POST",
    headers: {
			"Content-Type": "application/json",
		},
    body: JSON.stringify({
      "order_id": orderId,
      "menu_item_id": menuItem
    }),
  });
  if (response.ok){
    const data = await response.json();
    dispatch(clearCart(menuItem))
  } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}
