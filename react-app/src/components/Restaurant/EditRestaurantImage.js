import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from '../../context/Modal';
import { useHistory } from "react-router-dom";
import { editRestaurantImageThunk, getAllRestaurantsThunk } from "../../store/restaurant";
import "./Restaurant.css";

const EditRestaurantImage = ({ restaurant }) => {

    const { closeModal } = useModal();
    const history = useHistory();
    const dispatch = useDispatch();
    const [restaurantImage, setRestaurantImage] = useState(restaurant.restaurant_image);
    const [imageLoading, setImageLoading] = useState(false);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {

        const frontendErrors = {}

        if (!restaurantImage) {
            frontendErrors.restaurantImage = "An image is required to create a Restaurant."
        }

        setFrontendErrors(frontendErrors)

    }, [restaurantImage])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitted(true);

        const formData = new FormData();

        formData.append("restaurant_image", restaurantImage);

        try {
            await dispatch(editRestaurantImageThunk(restaurant.id, formData));
            await dispatch(getAllRestaurantsThunk());
            await history.push(`/my_restaurants`);
            await closeModal();
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    };


    const submitCancel = () => {
        history.push(`/my_restaurants`)
        closeModal()
    };


    return (
        <div className="update-restaurant-image">
            <h1 className="restaurant-title">Update Restaurant Image</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label className="edit-image-display">
                    <input
                        className="modal-input-image"
                        type="file"
                        accept="image/*, image/jpeg, image/jpg, image/gif"
                        onChange={(e) => setRestaurantImage(e.target.files[0])}
                    />
                </label>
                {frontendErrors.restaurantImage && submitted && <p className="modal-error">{frontendErrors.restaurantImage}</p>}
                <div className='save-cancel-edit-res'>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="restaurant-save-button"
                    >
                        Save
                    </button>
                    <button
                        type="submit"
                        onClick={submitCancel}
                        className="cancel-restaurant-button"
                    >
                        Cancel
                    </button>
                </div>
                {imageLoading && <p>Loading...</p>}
            </form>
        </div>
    )

}

export default EditRestaurantImage
