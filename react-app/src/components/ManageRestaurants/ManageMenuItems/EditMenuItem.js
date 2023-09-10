import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import OpenModalButton from "../../OpenModalButton";
import { useModal } from '../../../context/Modal';

import { useHistory, useParams } from "react-router-dom";
import {  getSingleRestaurantThunk } from "../../../store/restaurant";
import { editMenuItemThunk } from "../../../store/menu";

const EditMenuItem = ({ item }) => {
  const { restaurantId } = useParams();
    
    const { closeModal } = useModal()
    console.log("item: ---->", item);
  const dispatch = useDispatch();

  const history = useHistory();
  const menuItem = useSelector((state) => state.menu.singleMenuItems)
  const restaurant = Object.values(useSelector((state) => state.restaurant.singleRestaurant))
  console.log("MenuItem State: ---->", menuItem);
  const [name, setName] = useState(menuItem.name);
  const [price, setPrice] = useState(menuItem.price);
  const [description, setDescription] = useState(menuItem.description);
  const [menu_item_image, setMenu_item_image] = useState(menuItem.menu_item_image);
 
  console.log("RESTAURANT ID", restaurant)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append("description", description);
    formData.append("menu_item_image", menu_item_image);

    await dispatch(editMenuItemThunk(  item, formData));
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

export default EditMenuItem;

