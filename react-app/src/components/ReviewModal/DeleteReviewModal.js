import { useModal } from '../../context/Modal'
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from '../../store/review';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import './DeleteReviewModal.css'

const DeleteReviewModal = ({ restaurantId, reviewId }) => {

    const { closeModal } = useModal()
    const dispatch = useDispatch()


    const deleteReview = async (e) => {
        e.preventDefault()
        await dispatch(deleteReviewThunk(reviewId))
        await dispatch(getSingleRestaurantThunk(restaurantId))
        await closeModal()
    };

    const dontDeleteReview = () => {
        closeModal()
    }

    return (
        <div id='delete-confirmation-box'>
            <h3 className='delete-title'>Confirm Delete</h3>
            <h2>Are you sure you want to delete this review?</h2>
            <div className='delete-buttons'>
                <button className='delete-button-yes' onClick={deleteReview}>Yes (Delete Review)</button>
                <button className='delete-button-no' onClick={dontDeleteReview}>No (Keep Review)</button>
            </div>
        </div>
    )
}

export default DeleteReviewModal
