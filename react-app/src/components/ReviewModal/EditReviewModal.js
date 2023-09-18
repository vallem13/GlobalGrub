import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editReviewThunk, getAllReviewsThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant'
import StarRatings from "../StarRatings/starRating"
import './ReviewModal.css';

export default function EditReviewModal({  review, restaurant }) {
  const [editedReview, setEditedReview] = useState(review.comment);
  const [rating,setRating] = useState(review.rating);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();

  useEffect(() => {
    setErrors({});
  }, [review]);

  useEffect(() => {
    let errors = {};
    if (!rating) errors.stars = "Stars can't be empty";
    if (editedReview.length < 10) errors.review = "Review must be at least 10 characters long";

    setErrors(errors);
  }, [editedReview, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert('Please fix the errors you have');

    } else {

      const editedReviewData = {
        comment: editedReview,
        rating: rating,
      };

      try {
        await dispatch(editReviewThunk(editedReviewData, review.id, rating, editedReview));
      } catch (error) {
        setServerError(error.message);
      }

      await dispatch(getSingleRestaurantThunk(restaurant.id))
      await dispatch(getAllReviewsThunk())
      await closeModal()
    }

  };

  const onChange = (number) => {
    setRating(number);
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
