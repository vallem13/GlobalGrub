// Action Type
const CREATE_RESTAURANT_REVIEW = 'review/CREATE_RESTAURANT_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const RESET_REVIEWS = 'reviews/RESET_REVIEWS';

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
export const createRestaurantReviewThunk = (comment, rating, user_id, restaurant_id) => async (dispatch) => {
    const response = await fetch('/api/review', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            comment,
            rating,
            user_id,
            restaurant_id
        })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(createRestaurantReview(review));
        return data
    } else {
        const data = await response.json
        return data
    }
}

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/review/${reviewId}` , {
        method: 'DELETE'
    })
    if(response.ok) {
    const data = await response.json();
    dispatch(deleteReview(reviewId))
    return data;
    }
}

export const editReviewThunk = (review, reviewId) => async (dispatch) => {

    const response = await csrfFetch(`/api/review/${reviewId}`, {
      method: 'PUT',
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
    restaurant: {},
    user: {}
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

        default:
            return state;
    }
}
