// Action
const GET_ALL_RESTAURANTS = "restaurant/GET_ALL_RESTAURANTS";
const GET_SINGLE_RESTAURANT ="restaurant/GET_SINGLE_RESTAURANT";

// Action Creator
const getAllRestaurants = (restaurants) => ({
    type: GET_ALL_RESTAURANTS,
    restaurants
});

const getSingleRestaurant = (restaurant) => ({
    type: GET_SINGLE_RESTAURANT,
    restaurant
})

// Thunk
export const getAllRestaurantsThunk = () => async (dispatch) => {
    const response = await fetch('/api/restaurant');
    // console.log("------>", response)
    if (response.ok) {
        const restaurants = await response.json();
        dispatch(getAllRestaurants(restaurants));
        return response;
    }
}

export const getSingleRestaurantThunk = (restaurantId) => async (dispatch) => {
    const response = await fetch(`/api/restaurant/${restaurantId}`)
    if (response.ok) {
        const restaurant = await response.json()
        dispatch(getSingleRestaurant(restaurant))
        return response
      } else {
        const errors = await response.json();
        return errors
      }

}

// Initial State
const initialState = {
    allRestaurants: {},
    singleRestaurant: {},
  };

// Reducer
export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
    case GET_ALL_RESTAURANTS:
            newState = { ...state, allRestaurants: {}, singleRestaurant: {} };
            // console.log("=====>", action.restaurants)
            action.restaurants.forEach((restaurant) => {
                newState.allRestaurants[restaurant.id] = restaurant;
            });
            return newState
    case GET_SINGLE_RESTAURANT:
            newState = { ...state, allRestaurants: {}, singleRestaurant: {} };
            newState.singleRestaurant = action.restaurant
            return newState
        default:
            return state;
    }
}
