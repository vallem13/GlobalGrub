// Action
const GET_ALL_RESTAURANTS = "restaurant/GET_ALL_RESTAURANTS";
const GET_SINGLE_RESTAURANT ="restaurant/GET_SINGLE_RESTAURANT";
const CREATE_RESTAURANT = "restaurant/CREATE_SINGLE_RESTAURANT";
const DELETE_RESTAURANT = "pins/DELETE_SINGLE_PIN";

// Action Creator
const getAllRestaurants = (restaurants) => ({
    type: GET_ALL_RESTAURANTS,
    restaurants
});

const getSingleRestaurant = (restaurant) => ({
    type: GET_SINGLE_RESTAURANT,
    restaurant
})

const createRestaurant = (restaurant) => ({
    type: CREATE_RESTAURANT,
    restaurant
})

const deleteRestaurant = (restaurantId) => ({
    type: DELETE_RESTAURANT,
    restaurantId,
});

// Thunk
export const getAllRestaurantsThunk = () => async (dispatch) => {
    const response = await fetch('/api/restaurant/');
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

export const createRestaurantThunk = (formData) => async (dispatch) => {
    const response = await fetch('/api/restaurant/new-restaurant', {
        method: 'POST',
        body: formData
    })

    if(response.ok) {
        const restaurant = await response.json()
        dispatch(createRestaurant(restaurant))
        return response
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}

export const deleteRestaurantThunk = (restaurantId) => async (dispatch) => {
    const response = await fetch(`/api/restaurant/${restaurantId}`, {
        method: 'DELETE',
    });

    if(response.ok) {
        const restaurant = await response.json()
        dispatch(deleteRestaurant(restaurantId))
        return response
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const editRestaurantThunk = (restaurantId, formData) => async (dispatch) => {
    const response = await fetch(`/api/restaurant/edit/${restaurantId}`, {
        method: 'PUT',
        body: formData
    });

    if(response.ok) {
        const data = await response.json()
        dispatch(createRestaurant(formData))
        return response
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
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
        action.restaurants.forEach((restaurant) => {newState.allRestaurants[restaurant.id] = restaurant;});
        return newState

    case GET_SINGLE_RESTAURANT:
        newState = { ...state, allRestaurants: {}, singleRestaurant: {} };
        newState.singleRestaurant = action.restaurant
        return newState

    case CREATE_RESTAURANT:
        newState = { ...state, allRestaurants: { ...state.allRestaurants}, singleRestaurant: { ...action.restaurant} }
        return newState

    case DELETE_RESTAURANT:
        newState = { ...state, allRestaurants: { ...state.allRestaurants}, singlePin: {}}
        delete newState.allRestaurants[action.restaurantId]
        return newState

    default:
        return state;
    }
}
