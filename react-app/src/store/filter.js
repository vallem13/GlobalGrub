//Action
const SET_SEARCH_PRICES = 'SET_SEARCH_PRICES';
const SET_FILTERED_RESTAURANTS = 'SET_FILTERED_RESTAURANTS';
const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const clearFilters = () => ({
    type: CLEAR_FILTERS
});

export const setSearchPrices = (prices) => ({
    type: SET_SEARCH_PRICES,
    prices
  });
  
  export const setFilteredRestaurants = (restaurants) => ({
    type: SET_FILTERED_RESTAURANTS,
    restaurants
  });
  
// Thunk

export const getFilteredRestaurants = (prices) => async (dispatch) => {
    const res = await fetch(`/api/search/restaurants?price_range=${prices}`);
    if (res.ok) {
        const result = await res.json();
        dispatch(setFilteredRestaurants(result.restaurants));
    }  else {
        const errors = await res.json();
        return errors
      }
};

// Initial State
const initialState = {
    searchPrices: [],
    filteredRestaurants: {}
  };

// Reducer
const filterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_SEARCH_PRICES:
        newState = { ...state, searchPrices: action.prices };
        return newState;
  
      case SET_FILTERED_RESTAURANTS:
        newState = { ...state, filteredRestaurants: action.restaurants };
        return newState;
      
    

        case CLEAR_FILTERS:
            return initialState;
  
  
      default:
        return state;
    }
  
    
}

export default filterReducer;
