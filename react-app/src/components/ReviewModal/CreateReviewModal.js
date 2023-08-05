import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createRestaurantReviewThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import './ReviewModal.css';
import StarRatings from "../StarRatings/starRating"

const CreateReviewModal = ({ rating, user_id, restaurant }) => {
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(null);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  let disable = false;
  review.length > 9 || (disable = true);
  stars || (disable = true);

  useEffect(() => {
    let serverError = {};
    if (stars < 1) serverError.stars = "Stars can't be empty";
    if (review.length < 10) serverError.review = "Review must be at least 10 characters long";

    setServerError(errors);
  }, [review, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors you have');
    } else {
      let restaurantId = restaurant.id;

      try {
        await dispatch(createRestaurantReviewThunk(stars, review, user_id, restaurantId));
        await dispatch(getSingleRestaurantThunk(restaurantId));
        closeModal();
      } catch (error) {
        setServerError(error.message);
      }
    }
  };

  const onChange = (number) => {
    setStars(number);
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
      <h2 className="create-review-header">How was your Order?</h2>
      <textarea
        value={review}
        className="review-input"
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave your review here...."
        onBlur={noShowError}
      />
      {serverError && <p className='review-form-errors'>{serverError.review}</p>}

      <StarRatings
        disabled={false}
        onChange={onChange}
        rating={rating}
        iconSize={"large"}
      />

      <button type="submit" className="review-button" disabled={Object.keys(errors).length > 0}>Submit Your Review</button>

    </form>
  )
}

export default CreateReviewModal;
