import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createRestaurantReviewThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import './ReviewModal.css';

const CreateReviewModal = ({ restaurant, user }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [review, setReview] = useState('');
  const [stars, setStars] = useState('');
  const [activeRating, setActiveRating] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let errors = {};
    if (stars < 1) errors.stars = 'Stars can not be empty';
    if (review.length < 10) errors.review = 'Review should be 10 characters or more';
    setErrors(errors);
  }, [review, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addReview = {
      review,
      stars,
    };

    await dispatch(createRestaurantReviewThunk(addReview, restaurant.id, user));
    await dispatch(getSingleRestaurantThunk(restaurant.id));
    await closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="login-form">
        <h1>How was Order?</h1>
        <textarea
          id="review-text"
          placeholder="Leave your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        {errors.review && review.length > 0 && (
          <p className='error-message'>{errors.review}</p>
        )}
        <div id="stars-container">
          <div className="stars">
            <div
              className={activeRating >= 1 ? "filled" : "empty"}
              onClick={(e) => setStars(1)}
              onMouseEnter={(e) => setActiveRating(1)}
              onMouseLeave={(e) => setActiveRating(stars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable" ></i>
            </div>
            <div
              className={activeRating >= 2 ? "filled" : "empty"}
              onClick={(e) => setStars(2)}
              onMouseEnter={(e) => setActiveRating(2)}
              onMouseLeave={(e) => setActiveRating(stars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable" ></i>
            </div>
            <div
              className={activeRating >= 3 ? "filled" : "empty"}
              onClick={(e) => setStars(3)}
              onMouseEnter={(e) => setActiveRating(3)}
              onMouseLeave={(e) => setActiveRating(stars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable" ></i>
            </div>
            <div
              className={activeRating >= 4 ? "filled" : "empty"}
              onClick={(e) => setStars(4)}
              onMouseEnter={(e) => setActiveRating(4)}
              onMouseLeave={(e) => setActiveRating(stars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable" ></i>
            </div>
            <div
              className={activeRating >= 5 ? "filled" : "empty"}
              onClick={(e) => setStars(5)}
              onMouseEnter={(e) => setActiveRating(5)}
              onMouseLeave={(e) => setActiveRating(stars)}
            >
              <i className="fa-solid fa-star medium-big-star clickable" ></i>
            </div>
          </div>
          <div>
            <label className="star-label">Stars</label>
          </div>
        </div>
        <div className="submit-button">
          <button className="submit-review-button" type="submit" disabled={(review.length < 10) || !stars || Object.values(errors).length > 0}>Submit Your Review</button>
        </div>
      </div>
    </form>
  );

};

export default CreateReviewModal;
