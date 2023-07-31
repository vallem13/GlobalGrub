//ACTIONS
const ADD_TO_CART = "cart/ADD_TO_CART";


//ACTION CREATOR
const addToCart = (menuItem) => ({
  type: ADD_TO_CART,
  menuItem
})


//THUNKS
export const addToCartThunk = (orderId, menuItem) => async (dispatch) => {
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
    dispatch(addToCart(menuItem))
    console.log("IS THIS THE DATA",data)
  } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}


//REDUCER
