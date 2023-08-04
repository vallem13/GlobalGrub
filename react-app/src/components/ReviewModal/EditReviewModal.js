import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editReviewThunk } from '../../store/review';
import './ReviewModal.css';
import { useHistory } from 'react-router-dom'
import { getSingleRestaurantThunk } from '../../store/restaurant'
import StarRatings from "../StarRatings/starRating"

export default function EditReviewModal({ rating, review, restaurant }) {
  const [editedReview, setEditedReview] = useState(review.comment);
  const [editedStars, setEditedStars] = useState(review.rating);
  const [errors, setErrors] = useState({});
  const [activeStars, setActiveStars] = useState(null);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory()

  useEffect(() => {
    setErrors({});
  }, [review]);

  useEffect(() => {
    let errors = {};
    if (!editedStars) errors.stars = "Stars can't be empty";
    if (editedReview.length < 10) errors.review = "Review must be at least 10 characters long";

    setErrors(errors);
  }, [editedReview, editedStars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert('Please fix the errors you have');

    } else {

      const editedReviewData = {
        comment: editedReview,
        rating: editedStars,
      };

      try {
        await dispatch(editReviewThunk(editedReviewData, review.id, editedStars, editedReview));
      } catch (error) {
        setServerError(error.message);
      }

      await dispatch(getSingleRestaurantThunk(restaurant.id))
      await closeModal()
    }

  };

  const onChange = (number) => {
    setEditedStars(number);
  };

  const noShowError = () => {
    if (editedReview.length < 10) {
      setServerError(true);
    } else {
      setServerError(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2 className="edit-review-header">Edit Your Review</h2>
      <textarea
        value={editedReview}
        className="review-input"
        onChange={(e) => setEditedReview(e.target.value)}
        placeholder="Edit your review here...."
        onBlur={noShowError}
      />
      {serverError && <p className='review-form-errors'>Review must be more than 10 characters.</p>}

      <StarRatings
        disabled={false}
        onChange={onChange}
        rating={rating}
        iconSize={"large"}
      />

      <button type="submit" className="review-button" disabled={Object.values(errors).length > 0} >Submit Changes</button>
    </form>
  );
}
