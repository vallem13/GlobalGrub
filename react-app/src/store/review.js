// Action Types
const GET_ALL_REVIEWS = "review/GET_ALL_REVIEWS";
const GET_SINGLE_REVIEW ="review/GET_SINGLE_REVIEW";
const CREATE_RESTAURANT_REVIEW = 'review/CREATE_RESTAURANT_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const RESET_REVIEWS = 'reviews/RESET_REVIEWS';

// Action Creators
const getAllReviews = (reviews) => ({
  type: GET_ALL_REVIEWS,
  reviews
});

const getSingleReview = (review) => ({
  type: GET_SINGLE_REVIEW,
  review
})

const createRestaurantReview = (review) => ({
  type: CREATE_RESTAURANT_REVIEW,
  review,
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});

export const clearReviews = () => ({
  type: RESET_REVIEWS,
});


// Thunk for creating a review
export const getAllReviewsThunk = () => async (dispatch) => {
  const response = await fetch('/api/review/');
  if (response.ok) {
      const reviews = await response.json();
      dispatch(getAllReviews(reviews));
      return response;
  }
}

export const getSingleReviewThunk = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/review/${reviewId}`)
  if (response.ok) {
      const review = await response.json()
      dispatch(getSingleReview(review))
      return response
    } else {
      const errors = await response.json();
      return errors
    }
}

export const createRestaurantReviewThunk = (rating, comment, userId, restaurantId, review) => async (dispatch) => {
    try {
      const response = await fetch(`/api/review/${restaurantId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          comment,
          user_id: userId,
          restaurant_id: restaurantId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(createRestaurantReview(review));
        return data;
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Error creating review:", error);
      return ["An error occurred. Please try again."];
    }
  };

// Thunk for deleting a review
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/review/${reviewId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(deleteReview(reviewId));
      return data;
    }
  } catch (error) {
    console.error("Error deleting review:", error);
    return ["An error occurred. Please try again."];
  }
};

// Thunk for editing a review
export const editReviewThunk = (review, reviewId, rating, comment) => async (dispatch) => {
    try {
      const response = await fetch(`/api/review/edit/${reviewId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment,
          rating,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        await dispatch(createRestaurantReview(review));
        return data;
      }
    } catch (error) {
      console.error("Error editing review:", error);
      return ["An error occurred. Please try again."];
    }
  };

// Initial State
const initialState = {
  restaurant: {},
  allReviews: {},
  singleReview: {},
};

// Reducer
const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_REVIEWS:
        newState = { ...state, allReviews: {}, singleReview: {} };
        action.reviews.forEach((review) => {newState.allReviews[review.id] = review;});
        return newState

    case GET_SINGLE_REVIEW:
        newState = { ...state, allReviews: {}, singleReview: {} };
        newState.singleReview = action.review
        return newState

    case RESET_REVIEWS:
      return initialState;

    case DELETE_REVIEW:
      newState = { ...state, restaurant: { ...state.restaurant } };
      delete newState.restaurant[action.reviewId];
      return newState;

    case CREATE_RESTAURANT_REVIEW:
      newState = { ...state, restaurant: { ...state.restaurant } };
      newState.restaurant[action.review.id] = action.review;
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
