const GET_ORDERS = "cart/GET_ORDERS";






const getOrder = (cart) => ({
    type: GET_ORDERS,
    cart,
})

export const getOrderThunk = () => async (dispatch) => {
    const response = await fetch("/api/cart/user_orders");

    if (response.ok) {
        const data = await response.json()
        console.log("IS THIS THE USER'S ORDER????", data)
        dispatch(getOrder(data))
        console.log("WHAT IS THIS???", data)
        return data
    }
}


// const createCart = (cart) => ({
//     type: CREATE_CART,
//     cart,
// })



// export const getOrderThunk = () => async (dispatch) => {
//     const response = await fetch("/api/cart");

//     if (response.ok) {
//         const data = await response.json()
//         console.log("IS THIS THE USER'S ORDER????", data)
//         dispatch(getOrder(data))
//         console.log("WHAT IS THIS???", data)
//         return data
//     }
// }


// export const createCartThunk = (userId) => async (dispatch) => {
//     const response = await fetch(`/api/cart/${userId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       if (data.errors) {
//         return;
//       }
//       dispatch(createCart(data));
//     }
//   };


const initialState = {
    orders: {},
    cart: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS: {
            return { ...state, orders: action.cart };
        }




        default:
            return state
    }
}