import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createRestaurantReviewThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import './ReviewModal.css';

export default function CreateReviewModal({ user_id, restaurant }) {
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(null);
  const [errors, setErrors] = useState(false);
  const [activeStars, setActiveStars] = useState(null);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  let disable = false;
  review.length > 9 || (disable = true);
  stars || (disable = true);

  useEffect(() => {
    let errors = {};
    if (stars < 1) errors.stars = "Stars can't be empty";
    if (review.length < 10) errors.review = "Review must be at least 10 characters long";

    setErrors(errors);
  }, [review, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert('Please fix the errors you have');
    } else {
      let restaurantId = restaurant.id;
      // let reviews = { stars, review };

      try {
        await dispatch(createRestaurantReviewThunk(stars, review, user_id, restaurantId));
        await dispatch(getSingleRestaurantThunk(restaurantId));
        closeModal();
      } catch (error) {
        setServerError(error.message);
      }
    }
  };

  const noShowError = () => {
    if (review.length < 10) {
      setServerError(true);
    } else {
      setServerError(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2 className="create-review-header" >How was your Order?</h2>
      <textarea
        value={review}
        className="review-input"
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave your review here...."
        onBlur={noShowError}
      />
      {serverError && <p className='review-form-errors'>Review must be more than 10 characters.</p>}

      <div className="star-container">
        <div className={stars >= 1 || activeStars >= 1 ? 'star-filled' : 'star-empty'}
          onClick={() => setStars(1)}
          onMouseEnter={() => setActiveStars(1)}
          onMouseLeave={() => setActiveStars(stars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={stars >= 2 || activeStars >= 2 ? 'star-filled' : 'star-empty'}
          onClick={() => setStars(2)}
          onMouseEnter={() => setActiveStars(2)}
          onMouseLeave={() => setActiveStars(stars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={stars >= 3 || activeStars >= 3 ? 'star-filled' : 'star-empty'}
          onClick={() => setStars(3)}
          onMouseEnter={() => setActiveStars(3)}
          onMouseLeave={() => setActiveStars(stars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={stars >= 4 || activeStars >= 4 ? 'star-filled' : 'star-empty'}
          onClick={() => setStars(4)}
          onMouseEnter={() => setActiveStars(4)}
          onMouseLeave={() => setActiveStars(stars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={stars >= 5 || activeStars >= 5 ? 'star-filled' : 'star-empty'}
          onClick={() => setStars(5)}
          onMouseEnter={() => setActiveStars(5)}
          onMouseLeave={() => setActiveStars(stars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <span> Stars</span>
      </div>

      <button type="submit" className="review-button" disabled={Object.values(errors).length > 0} >Submit Your Review</button>

    </form>
  )
}
