// Action Type
const CREATE_RESTAURANT_REVIEW = 'review/CREATE_RESTAURANT_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const RESET_REVIEWS = 'reviews/RESET_REVIEWS';
// const EDIT_REVIEW = 'reviews/EDIT_REVIEW';

// Action Creators
const createRestaurantReview = (review) => ({
    type: CREATE_RESTAURANT_REVIEW,
    review
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const clearReviews = () => ({

    type: RESET_REVIEWS
})

// Thunk
export const createRestaurantReviewThunk = (review, restaurantId) => async (dispatch) => {
    const response = await fetch('/api/review', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            review,
            restaurantId)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(createRestaurantReview(data));
        return data
    } else {
        const data = await response.json
        return data
    }
}

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/review/${reviewId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(deleteReview(reviewId))
        return data;
    }
}

export const editReviewThunk = (review, reviewId) => async (dispatch) => {

    const response = await fetch(`/api/review/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(createRestaurantReview(review))
        return data
    } else {
        const data = await response.json()
        return data
    }
}

//   Initial State
const initialState = {
    restaurant: {}
};

// Reducer
const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case RESET_REVIEWS:
            return initialState

        case DELETE_REVIEW:
            newState = { ...state, restaurant: { ...state.restaurant } }
            delete newState.restaurant[action.reviewId]
            return newState

        // case EDIT_REVIEW:
        //     newState = { ...state, restaurant: { ...state.restaurant } }
        //     newState.restaurant[action.restaurant.id] = action.restaurant

        default:
            return state;
    }
}

export default reviewReducer
