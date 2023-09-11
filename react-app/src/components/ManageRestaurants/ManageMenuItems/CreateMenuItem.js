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
  const [menu_item_image, setMenu_item_image] = useState("");
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



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group"></div>
        {frontendErrors.name && submitted && <p className="modal-error">{frontendErrors.name}</p>}
        {frontendErrors.price && submitted && <p className="modal-error">{frontendErrors.price}</p>}
        {frontendErrors.description && submitted && <p className="modal-error">{frontendErrors.description}</p>}
        <label className="modal-label">
                    Menu Item Name
                    <input
                        className="modal-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="modal-label">
                    Price
                    <input
                    className="modal-input"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </label>
                <label className="modal-label">
                    Description
                    <input
                    className="modal-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </label>
                <label className="modal-label">
                    Menu Item Image
                    <input
                    className="modal-input"
                    type="text"
                    value={menu_item_image}
                    onChange={(e) => setMenu_item_image(e.target.value)}
                    required
                    />
                </label>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="modal-button save-pin-button"
                >
                    Save
                </button>
        
        </form>
        </div>

)
} 

export default CreateMenuItem;

