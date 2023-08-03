// Action
const GET_ALL_RESTAURANTS = "restaurant/GET_ALL_RESTAURANTS";
const GET_SINGLE_RESTAURANT = "restaurant/GET_SINGLE_RESTAURANT";
const GET_RESTAURANTS_BY_CUISINE = "restaurant/GET_RESTAURANTS_BY_CUISINE"

// Action Creator
const getAllRestaurants = (restaurants) => ({
    type: GET_ALL_RESTAURANTS,
    restaurants
});

const getSingleRestaurant = (restaurant) => ({
    type: GET_SINGLE_RESTAURANT,
    restaurant
})

const getRestaurantsByCuisine = (restaurants, cuisineTypeId) => ({
    type: GET_RESTAURANTS_BY_CUISINE,
    restaurants,
    cuisineTypeId
})

// Thunk
export const getAllRestaurantsThunk = () => async (dispatch) => {
    const response = await fetch('/api/restaurants');
    if (response.ok) {
        const restaurants = await response.json();
        dispatch(getAllRestaurants(restaurants.Restaurant));
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

export const getRestaurantsByCuisineThunk = (cuisineTypeId) => async (dispatch) => {
    const response = await fetch(`/api/restaurant/${cuisineTypeId}/restaurants`);
    console.log("Received cuisineTypeId:", cuisineTypeId)
    if (response.ok) {
        const restaurants = await response.json();
        dispatch(getRestaurantsByCuisine(restaurants))
        console.log("This is restaurant", restaurants)
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
    getRestaurants: {}
};

// Reducer
export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            newState = { ...state, allRestaurants: {}, singleRestaurant: {} };
            action.restaurants.forEach(restaurant => newState.allRestaurants[restaurant.id] = restaurant)
            return newState
        case GET_SINGLE_RESTAURANT:
            newState = { ...state, allRestaurants: {}, singleRestaurant: {} };
            newState.singleRestaurant = action.restaurant
            return newState
        case GET_RESTAURANTS_BY_CUISINE: 
        newState = {
            ...state, allRestaurants: {},
            singleRestaurant: {},
            getRestaurants: {}
        };
        action.restaurants.forEach((restaurant) => (newState.getRestaurants[restaurant.id] = restaurant))
           
            return newState;
        default:
            return state;
    }
}
