
//Action Creator
const GET_ORDERS = "cart/GET_ORDERS"
const CREATE_CART = "cart/CREATE_CART";
const EMPTY_CART = "cart/EMPTY_CART"

//Action
export const getOrder = (cart) => ({
    type: GET_ORDERS,
    cart,
})

export const createCart = (cart) => ({
    type: CREATE_CART,
    cart
 });

 export const emptyCart = (restaurant_id) => ({
    type: EMPTY_CART,
    restaurant_id

 });

//THUNK
export const getOrderThunk = () => async (dispatch) => {
    const response = await fetch("/api/cart/user_orders");

    if (response.ok) {
        const data = await response.json()
        dispatch(getOrder(data))
        return data
    }
}

export const thunkCreateCart = (user_id, restaurant_id, menu_item_ids) => async (dispatch) => {
    const response = await fetch(`/api/cart/${user_id}`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            user_id,
            restaurant_id,
            menu_items: menu_item_ids
        })
    });

    if (response.ok) {
        const data = await response.json()
        await dispatch(emptyCart(restaurant_id))
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


//REDUCER
const initialState = {
    orders: {},
    cart: {}
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_ORDERS:
        return { ...state, orders: action.cart };
      case CREATE_CART:
        return {
          ...state,
          cart: { ...state.cart, ...action.cart },
        };
      case EMPTY_CART:
        return {
          ...state,
          cart: {},
        };
      default:
        return state;
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
