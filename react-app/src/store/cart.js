
//Action Creator
const GET_ORDERS = "cart/GET_ORDERS";
const CREATE_CART = "cart/CREATE_CART";
const ADD_ITEM = "cart/ADD_ITEM";
const EMPTY_CART = "cart/EMPTY_CART";
const UPDATE_ORDER_CART = "cart/UPDATE_ORDER_CART";
const UPDATE_NEW_ORDERS = "cart/UPDATE_NEW_ORDERS";
const YEET_ITEM = "cart/YEET_ITEM";

// Action Creators
export const getOrder = (cart) => ({
  type: GET_ORDERS,
  cart,
});

export const createCart = (cart) => ({
  type: CREATE_CART,
  cart,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const emptyCart = () => ({
  type: EMPTY_CART
});

export const updateOrderCart = (cart) => ({
  type: UPDATE_ORDER_CART,
  cart,
});

export const updateNewOrders = (orders) => ({
  type: UPDATE_NEW_ORDERS,
  orders,
});

export const yeetItem = (menu_item_id) => ({
  type: YEET_ITEM,
  menu_item_id,
});

// Thunks
export const getOrderThunk = () => async (dispatch) => {
  try {
    const response = await fetch("/api/cart/user_orders");
    if (response.ok) {
      const data = await response.json();
      dispatch(getOrder(data));
      return data;
    } else {
      // Handle error response if needed
      console.error("Error fetching orders:", response.statusText);
    }
  } catch (error) {
    // Handle fetch error if needed
    console.error("Error fetching orders:", error);
  }
};

export const thunkCreateCart = (user_id, restaurant_id, menu_item_ids) => async (dispatch) => {
  try {
    const response = await fetch(`/api/cart/${user_id}`, {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        user_id,
        restaurant_id,
        menu_items: menu_item_ids
      }),
    });

    if (response.ok) {
      const data = await response.json();
      await dispatch(emptyCart(restaurant_id));
      return data;
    } else {
      const data = await response.json();
      if (data.errors) {
        // Handle error response if needed
        console.error("Error creating cart:", data.errors);
      }
    }
  } catch (error) {
    // Handle fetch error if needed
    console.error("Error creating cart:", error);
  }
};

// Reducer
const initialState = {
  orders: {},
  cart: {},
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ORDERS:
      return { ...state, orders: action.cart };

    case CREATE_CART:
      return {
        ...state,
        cart: { ...state.cart, ...action.cart },
        currentCartId: action.cart.cart_id
      };

    case ADD_ITEM:
      const restaurant_id = action.item.restaurant_id;
      const item_id = action.item.id;
      return {
        ...state,
        [restaurant_id]: {
          ...state[restaurant_id],
          [item_id]: { ...action.item }
        }
      };

    case EMPTY_CART:
      return initialState

    case UPDATE_ORDER_CART:
      return {
        ...state,
        cart: { ...state.cart, ...action.cart },
      };

    case UPDATE_NEW_ORDERS:
      return {
        ...state,
        orders: { ...state.orders, ...action.orders },
      };

    case YEET_ITEM:
      const itemToRemove = action.menu_item_id;
      //console.log("Item to remove:", itemToRemove);
      const updatedCart = { ...state.cart };
      for (const restaurant_id in updatedCart) {
        const restaurantOrders = updatedCart[restaurant_id];
        if (restaurantOrders[itemToRemove]) {
          //console.log("Removing item from restaurant:", itemToRemove);
          // Clone the restaurantOrders object before modifying it
          const updatedRestaurantOrders = { ...restaurantOrders };
          delete updatedRestaurantOrders[itemToRemove];
          updatedCart[restaurant_id] = updatedRestaurantOrders;
        }
      }
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

export default cartReducer;
