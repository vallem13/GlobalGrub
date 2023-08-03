import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editReviewThunk } from '../../store/review';
import './ReviewModal.css';

export default function EditReviewModal({ user_id, review, restaurant }) {
  const [editedReview, setEditedReview] = useState(review.comment);
  const [editedStars, setEditedStars] = useState(review.rating);
  const [errors, setErrors] = useState({});
  const [activeStars, setActiveStars] = useState(null);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();
  const { closeModal } = useModal();

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
        await dispatch(editReviewThunk(editedReviewData, review.id));
        closeModal();
      } catch (error) {
        setServerError(error.message);
      }
    }
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

      <div className="star-container">
        <div className={editedStars >= 1 || activeStars >= 1 ? 'star-filled' : 'star-empty'}
          onClick={() => setEditedStars(1)}
          onMouseEnter={() => setActiveStars(1)}
          onMouseLeave={() => setActiveStars(editedStars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={editedStars >= 2 || activeStars >= 2 ? 'star-filled' : 'star-empty'}
          onClick={() => setEditedStars(2)}
          onMouseEnter={() => setActiveStars(2)}
          onMouseLeave={() => setActiveStars(editedStars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={editedStars >= 3 || activeStars >= 3 ? 'star-filled' : 'star-empty'}
          onClick={() => setEditedStars(3)}
          onMouseEnter={() => setActiveStars(3)}
          onMouseLeave={() => setActiveStars(editedStars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={editedStars >= 4 || activeStars >= 4 ? 'star-filled' : 'star-empty'}
          onClick={() => setEditedStars(4)}
          onMouseEnter={() => setActiveStars(4)}
          onMouseLeave={() => setActiveStars(editedStars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <div className={editedStars >= 1 || activeStars >= 1 ? 'star-filled' : 'star-empty'}
          onClick={() => setEditedStars(1)}
          onMouseEnter={() => setActiveStars(1)}
          onMouseLeave={() => setActiveStars(editedStars)}
        >
          <span className="material-symbols-outlined">star</span>
        </div>

        <span> Stars</span>
      </div>

      <button type="submit" className="review-button" disabled={Object.values(errors).length > 0} >Submit Changes</button>
    </form>
  );
}
