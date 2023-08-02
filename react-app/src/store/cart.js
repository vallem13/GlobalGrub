
//Action Creator
const GET_ORDERS = "cart/GET_ORDERS"
const CREATE_CART = "cart/CREATE_CART";

const CREATE_ORDER = "cart/CREATE_ORDER"

//Action 

export const getOrder = (cart) => ({
    type: GET_ORDERS,
    cart,
})

export const createCart = (cart) => ({
    type: CREATE_CART,
    cart,
   
 });
//  export const createOrder = (cart) => ({
//     type: CREATE_ORDER,
//    cart
    
//  });


// export const createOrder = (cart) => ({
//     type: CREATE_ORDER,
//     cart
    
// })


//THUNK


export const getOrderThunk = () => async (dispatch) => {
    const response = await fetch("/api/cart/user_orders");

    if (response.ok) {
        const data = await response.json()
        dispatch(getOrder(data))
        return data
    }
}




export const thunkCreateCart = (user_id, restaurant_id, menu_item_id, cart) => async (dispatch) => {
    const response = await fetch(`/api/cart/${user_id}`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            user_id, 
            restaurant_id,
            menu_item_id
        })
    });

    if (response.ok) {
        const data = await response.json()
       const thunkDispatch = await dispatch(createCart(cart))
        console.log("Is this the data", cart)
        console.log("THIS IS THE THUNK DISPATCH -->", thunkDispatch)
        return data

    } else if (response.status) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];

    }
}

// export const thunkCreateCart_Order = (user_id, restaurant_id, menu_items) => async (dispatch) => {
 
//       // Create the cart first
//       const response = await fetch("/api/cart/create_cart/1", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ restaurant_id }),
//       });
//       console.log("WHAT IS THIS RESPONSE---->", response)
//       if (response.ok) {
//         const data = await (response.json());
//         const { cartData } = data;
       

//         dispatch(createCart(cartData));
       
 
 
  
//       // Create the order and add it to the cart
//       const response = await fetch("/api/cart/create_order/1/60", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ menu_items }),
//       });
  
//       if (response.ok) {
//         const data = await (response.json());
//         const { orderData } = data

//         dispatch(createOrder(orderData));
//       }
    
//   }
// }
  

// WHAT IS GOING ON WITH THIS ENDPOINT?????
// It's sending back the right erros 

// export const thunkCreateCart = (user_id, restaurant_id, menu_item_id, cart_id) => async (dispatch) => {
//     const response = await fetch("/api/cart/create_cart/1", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ restaurant_id, 
//             "menu_items": menu_item_id }),
//       });
//     console.log("WHAT IS THIS RESPONSE---->", response)

//     if (response.ok) {
//         const data = await (response.json());

       
//         dispatch(createCart(data))
//         console.log("WHAT IS THIS DATA---->", data)
//         return data
//     }
// }

// bring in meny table 

// export const thunkCreateOrder = (user_id, cart_id, menuItems) => async (dispatch) => {
//     const response = await fetch("/api/cart/create_cart/1", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ restaurant_id }),
//       });
//     console.log("WHAT IS THIS RESPONSE---->", response)

//     if (response.ok) {
//         const data = await (response.json());
        // const { cart_id } = data;
       
//         dispatch(createCart(cart_id, user_id, restaurant_id))
//         console.log("WHAT IS THIS DATA---->", data)
//         return data
//     }
// }



//REDUCER


const initialState = {
    orders: {},
    cart: {}
}



export default function reducer( state = initialState, action) {
   
    switch (action.type) {
        case GET_ORDERS: {
            return { ...state, orders: action.cart };
        }
            
        case CREATE_CART: {
            console.log("action", action.cart)

            const newState = { ...state, orders: {...state.orders}, cart: {...state.cart, ...action.cart}}


            console.log("WHAT IS STATE ----->", newState)
           return newState

        }
    
    
   
        default:
        return state
    }

}

































// //thunk
// export const getOrderThunk = () => async (dispatch) => {
//     const response = await fetch("/api/cart/user_orders");

//     if (response.ok) {
//         const data = await response.json()
//         dispatch(getOrder(data))
//         return data
//     }
// }

// export const thunkCreateCart = (user_id) => async (dispatch) => {
//     const response = await fetch(`/api/cart/${user_id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': "application/json" },
//         body: JSON.stringify({
            
//         })
//     });

//     if (response.ok) {
//         const data = await response.json()
//         await dispatch(emptyCart(user_id))
//         console.log("Is this the data", data)
//         return data
//     } else if (response.status) {
//         const data = await response.json();
//         if (data.errors) {
//             return data.errors;
//         }
//     } else {
//         return ["An error occurred. Please try again."];

//     }
// }

// // export const thunkCreateOrder = (user_id, restaurant_id, Orders, menu_item_id) => async (dispatch) => {
// //   await csrfFetch(`/api/spots/${spot.id}/images`, {
// //     method: 'POST',
// //     body: JSON.stringify(image)
// //   })
// // }



// // const createCart = (cart) => ({
// //     type: CREATE_CART,
// //     cart,
// // })



// // export const getOrderThunk = () => async (dispatch) => {
// //     const response = await fetch("/api/cart");

// //     if (response.ok) {
// //         const data = await response.json()
// //         console.log("IS THIS THE USER'S ORDER????", data)
// //         dispatch(getOrder(data))
// //         console.log("WHAT IS THIS???", data)
// //         return data
// //     }
// // }


// // export const createCartThunk = (userId) => async (dispatch) => {
// //     const response = await fetch(`/api/cart/${userId}`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     });
// //     if (response.ok) {
// //       const data = await response.json();
// //       if (data.errors) {
// //         return;
// //       }
// //       dispatch(createCart(data));
// //     }
// //   };


// const initialState = {
//     orders: {},
//     cart: {}
// }

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
      
//         case CREATE_CART: {
//             const newState = { ...state };
//             const restaurant_id = action.cart.restaurant_id;
//             const menu_item_id = action.cart.menu_item_id;
//             if (newState[restaurant_id]) {
//                 newState[restaurant_id][menu_item_id] = { ...action.cart }
//             } else {
//                 let new_menu_item = {};
//                 new_menu_item[menu_item_id] = { ...action.cart };
//                 newState[restaurant_id] = new_menu_item;
//             }
//             return newState
//         };
//         case EMPTY_CART:
//             const newState = {...state};
//             delete newState[action.restaurantId]
//             return newState


//             case GET_ORDERS: {
//                 return { ...state, orders: action.cart };
//             }



//         default:
//             return state
//     }
// }


// const CREATE_CART = "cart/CREATE_CART";

// const EMPTY_CART = "cart/EMPTY_CART"




// export const getOrder = (cart) => ({
//     type: GET_ORDERS,
//     cart,
// })




// export const createCart = (cart) => ({
//     type: CREATE_CART,
//     cart,
// });

// export const emptyCart = (restaurantId) => ({
//     type: EMPTY_CART,
//     restaurantId
// })



