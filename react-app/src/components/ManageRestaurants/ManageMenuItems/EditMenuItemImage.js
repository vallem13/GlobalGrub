import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from '../../../context/Modal';
import { useHistory } from "react-router-dom";
import { getSingleRestaurantThunk } from "../../../store/restaurant";
import { editMenuItemImageThunk } from "../../../store/menu";

const EditMenuItemImage = ({ item }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();
    const history = useHistory();
    const [menu_item_image, setMenu_item_image] = useState(item.menu_item_image);
    const [imageLoading, setImageLoading] = useState(false);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {

        const frontendErrors = {};

        if (!menu_item_image) {
            frontendErrors.menu_item_image = "Image is required";
        };

        setFrontendErrors(frontendErrors);

    }, [menu_item_image])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)

        const hasFrontendErrors = Object.keys(frontendErrors).length > 0;
        if (!hasFrontendErrors) {
            const formData = new FormData();

            formData.append("menu_item_image", menu_item_image);

            await dispatch(editMenuItemImageThunk(item.id, formData));
            closeModal()
            dispatch(getSingleRestaurantThunk(item.id))
            await history.push(`/menu_item/${item.id}`)
        }
    };

    const submitCancel = () => {
        history.push(`/menu_item/edit/${item.id}/image`)
        closeModal()
    };

    return (
        <div className="update-restaurant-image">
            <h1 className="restaurant-title">Update Menu Item Image</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" method="PUT">
                <label className="edit-image-display">
                    <input
                        className="modal-input-image"
                        type="file"
                        accept="image/*, image/jpeg, image/jpg, image/gif"
                        onChange={(e) => setMenu_item_image(e.target.files[0])}
                    />
                </label>
                {frontendErrors.menu_item_image && submitted && <p className="modal-error">{frontendErrors.menu_item_image}</p>}
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

export default EditMenuItemImage;
