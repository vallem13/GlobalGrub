import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {  getSingleRestaurantThunk } from "../../../store/restaurant";
import { createMenuItemThunk, getSingleMenuItemThunk } from "../../../store/menu";

const CreateMenuItem = ( ) => {
    

  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [menu_item_image, setMenu_item_image] = useState(null);
  const [frontendErrors, setFrontendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const frontendErrors = {};
    if (!name) {
      frontendErrors.name = "Menu name is required";
    };
    if (name.length < 1) {
      frontendErrors.price = "Menu name must be at least 1 character";
    };
    if (name.length > 50) {
      frontendErrors.price = "Menu name must be less than 50 characters";
    };
    if (!price) {
      frontendErrors.price = "Menu price is required";
    };
    if (!description) {
      frontendErrors.description = "Description is required";
    };
    if (!menu_item_image) {
      frontendErrors.menu_item_image = "Image is required";
    };
    setFrontendErrors(frontendErrors);

  },[name, price, description, menu_item_image] )

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    const hasFrontendErrors = Object.keys(frontendErrors).length > 0;
    if (!hasFrontendErrors) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append("description", description);
    formData.append("menu_item_image", menu_item_image);
    formData.append("restaurant_id", restaurantId);

dispatch(createMenuItemThunk(restaurantId, formData));
      dispatch(getSingleRestaurantThunk(restaurantId))
await history.push(`/menu_item/${restaurantId}`)

 
}
};
const submitCancel = () => {
  history.push(`/menu_item/${restaurantId}`)

};



  return (
    <div id="update-restaurant">
      
            <form onSubmit={handleSubmit} encType="multipart/form-data" method='POST'  >
            <h1 id="restaurant-title">Create Your Menu Item</h1>
        <label className="add-restaurant-field">
                    Menu Item Name
                    <input
                        className="restaurant-input-update"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.name && submitted && <p className="modal-error">{frontendErrors.name}</p>}

                <label className="add-restaurant-field">
                    Price
                    <input
                    className="restaurant-input-update"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </label>
                {frontendErrors.price && submitted && <p className="modal-error">{frontendErrors.price}</p>}

                <label className="add-restaurant-field edit-res-description">
                    Description
                    <input
                    className="restaurant-input-update"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </label>
                {frontendErrors.description && submitted && <p className="modal-error">{frontendErrors.description}</p>}

                <label className="add-restaurant-field">
                    Menu Item Image
                    <input
                        className="restaurant-input"
                        type="file"
                        accept="image/*, image/jpeg, image/jpg, image/gif"
                        onChange={(e) => setMenu_item_image(e.target.files[0])}
                    />
                </label>
                {frontendErrors.menu_item_image && submitted && <p className="modal-error">{frontendErrors.menu_item_image}</p>}

                    {/* <input
                    className="modal-input"
                    type="text"
                    value={menu_item_image}
                    onChange={(e) => setMenu_item_image(e.target.value)}
                    required
                    />
                </label> */}
 <div className='save-cancel-edit-res' style={{ justifyContent: "center" }}>
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
        
        </form>
        </div>
        

)
} 

export default CreateMenuItem;

