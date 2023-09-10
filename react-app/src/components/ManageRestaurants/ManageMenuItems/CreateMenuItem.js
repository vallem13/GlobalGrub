import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {  getSingleRestaurantThunk } from "../../../store/restaurant";
import { createMenuItemThunk, getSingleMenuItemThunk } from "../../../store/menu";

const CreateMenuItem = ( ) => {
    

  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();
  console.log("restaurantId: ---->", restaurantId);
  const restaurant = Object.values(useSelector((state) => state.restaurant.singleRestaurant))
    const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [menu_item_image, setMenu_item_image] = useState("");
 
  console.log("RESTAURANT ID", restaurant)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append("description", description);
    formData.append("menu_item_image", menu_item_image);
    formData.append("restaurant_id", restaurantId);

dispatch(createMenuItemThunk(restaurantId, formData));
    dispatch(getSingleRestaurantThunk(restaurantId))
 await history.push(`/menu_item/${restaurantId}`)
    
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group"></div>
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

