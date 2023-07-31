
//actions

// const CLEAR_CART = "cart/CLEAR_CART"
// const CLEAR_ONE_ITEM = "cart/CLEAR_ONE_ITEM"
const ADD_TO_CART = "cart/ADD_TO_CART";


//action creator
const addToCart = (menuItem) => ({
  type: ADD_TO_CART,
  menuItem
})

// const clearOneItem = () => ({
//   type: CLEAR_ONE_ITEM
// })


// const clearCart = () => ({
//   type: CLEAR_CART,

// })


//thunk

export const insertItemThunk = (orderId, menuItem) => async (dispatch) => {
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



// Reducer

//initial state is called state
//once the user adds to cart 
const initialState = {
  orderObj: {},
  menuObj: {}
};

// export default function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case ADD_TO_CART:
   
//     }
//     console.log("IS THIS THE NEW STATE", newState)
//     return newState;




//     default:
//       return state
//   }
