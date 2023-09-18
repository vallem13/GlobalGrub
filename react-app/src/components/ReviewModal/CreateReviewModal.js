import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createRestaurantReviewThunk, getAllReviewsThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import StarRatings from "../StarRatings/starRating"
import './ReviewModal.css';

const CreateReviewModal = ({ user_id, restaurant}) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  let disable = false;
  review.length > 9 || (disable = true);
  rating || (disable = true);

  useEffect(() => {
    let serverError = {};
    if (rating < 1) serverError.rating = "rating can't be empty";
    if (review.length < 10) serverError.review = "Review must be at least 10 characters long";

    setServerError(serverError);
  }, [review, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors you have');
    } else {
      let restaurantId = restaurant.id;

      try {
        await dispatch(createRestaurantReviewThunk(rating, review, user_id, restaurantId));
      } catch (error) {
        setServerError(error.message);
      }
      await dispatch(getSingleRestaurantThunk(restaurantId));
      await dispatch(getAllReviewsThunk())
      closeModal();
    }
  };

  const onChange = (number) => {
    setRating(number);
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
      {serverError.review && review.length > 0 && <p className='on-submit-errors'>{serverError.review}</p>}

      <StarRatings
        disabled={false}
        onChange={onChange}
        rating={rating}
        iconSize={"large"}
      />

      <button type="submit" className="review-button" disabled={Object.keys(serverError).length > 0}>Submit Your Review</button>

    </form>
  )
}

export default CreateReviewModal;
