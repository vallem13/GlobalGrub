const GET_CUISINES = "cuisine/GET_CUISINES";
const GET_SINGLE_CUISINE = "cuisine/GET_SINGLE_CUISINE";

const getCuisines = (cuisines) => ({
    type: GET_CUISINES,
    cuisines,
});

const getSingletCuisine = (cuisineId) => ({
    type: GET_SINGLE_CUISINE,
    cuisineId
})

export const getCuisineThunk = () => async (dispatch) => {
    const response = await fetch("/api/cuisine_type/");
    if (response.ok) {
        const data = await response.json()
        dispatch(getCuisines(data))
        return data
    }
};

export const getSingleCuisineThunk = (cuisineId) => async (dispatch) => {
    const response = await fetch(`/api/cuisine_type/${cuisineId}`);
    if (response.ok) {
        const data = await response.json()
        dispatch(getSingletCuisine(data))
        return data
    }
};

const initialState = {
    allCuisines: {},
    singleCuisine: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CUISINES:
            const newState = { ...state, allCuisines: {} };
            action.cuisines.forEach((cuisine) => {
                newState.allCuisines[cuisine.id] = cuisine;
            });
            return newState;
        case GET_SINGLE_CUISINE: {
            const newState = { ...state, singleCuisine: {} };
            newState.singleCuisine = action.cuisineId;
            return newState;
        }
        default:
            return state;
    }
}
