import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editReviewThunk } from "../../store/review";
import { getSingleRestaurantThunk } from "../../store/restaurant";
import { useHistory } from "react-router-dom"


const EditReviewModal = ({ restaurant, review, user }) => {

  const { closeModal } = useModal();
  const history = useHistory()
  const dispatch = useDispatch();
  const [editedReview, setEditedReview] = useState(review?.review || "");
  const [editedStars, setEditedStars] = useState(review?.stars || "");
  const [activeRating, setActiveRating] = useState(review?.stars || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let errors = {};
    if (editedStars < 1) errors.stars = "Stars can not be empty";
    if (editedReview.length < 10) errors.review = "Review should be 10 characters or more";
    setErrors(errors);
  }, [editedReview, editedStars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: editedReview,
      stars: editedStars,
    };

    // console.log('----->',review)
    // await dispatch(editReviewThunk(editedReview, review.id));
    // await dispatch(getSingleRestaurantThunk(restaurant.id));
    // await closeModal();

    if(!Object.values(errors).length) {
        const editReview = await dispatch(editReviewThunk(newReview, restaurant.id))

        if (editReview.errors) setErrors(editReview.errors)
        else await history.push(`/restaurant/${restaurant.id}`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="login-form">
        <h1>How was Order?</h1>
        <textarea
          id="review-text"
          placeholder="Leave your review here..."
          value={editedReview}
          onChange={(e) => setEditedReview(e.target.value)}
        />
        {errors.review && editedReview.length > 0 && (
          <p className="error-message">{errors.review}</p>
        )}
        <div id="stars-container">
          <div className="stars">
            <div
              className={activeRating >= 1 ? "filled" : "empty"}
              onClick={() => setEditedStars(1)}
              onMouseEnter={() => setActiveRating(1)}
              onMouseLeave={() => setActiveRating(editedStars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable"></i>
            </div>
            <div
              className={activeRating >= 2 ? "filled" : "empty"}
              onClick={() => setEditedStars(2)}
              onMouseEnter={() => setActiveRating(2)}
              onMouseLeave={() => setActiveRating(editedStars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable"></i>
            </div>
            <div
              className={activeRating >= 3 ? "filled" : "empty"}
              onClick={() => setEditedStars(3)}
              onMouseEnter={() => setActiveRating(3)}
              onMouseLeave={() => setActiveRating(editedStars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable"></i>
            </div>
            <div
              className={activeRating >= 4 ? "filled" : "empty"}
              onClick={() => setEditedStars(4)}
              onMouseEnter={() => setActiveRating(4)}
              onMouseLeave={() => setActiveRating(editedStars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable"></i>
            </div>
            <div
              className={activeRating >= 5 ? "filled" : "empty"}
              onClick={() => setEditedStars(5)}
              onMouseEnter={() => setActiveRating(5)}
              onMouseLeave={() => setActiveRating(editedStars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable"></i>
            </div>
          </div>
          <div>
            <label className="star-label">Stars</label>
          </div>
        </div>
        <div className="submit-button">
          <button
            className="submit-review-button"
            type="submit"
            disabled={editedReview.length < 10 || !editedStars || Object.values(errors).length > 0}
          >
            Submit Your Review
          </button>
        </div>
      </div>
    </form>
  );

};

export default EditReviewModal;
