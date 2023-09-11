import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from '../../../context/Modal';
import { useHistory } from "react-router-dom";
import { getSingleRestaurantThunk } from "../../../store/restaurant";
import { editMenuItemThunk } from "../../../store/menu";

const EditMenuItem = ({ item }) => {
  console.log("------->", item)
  const { closeModal } = useModal()
  const dispatch = useDispatch();
  const history = useHistory();
  const singleRestaurant = useSelector((state) => state.restaurant.singleRestaurant)
  const items = singleRestaurant.menu_items || [];
  const itemsDetail = items.find((menuItem) => menuItem.id === item)
  const [name, setName] = useState(itemsDetail.name);
  const [price, setPrice] = useState(itemsDetail.price);
  const [description, setDescription] = useState(itemsDetail.description);
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

    setFrontendErrors(frontendErrors);

  }, [name, price, description])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    const hasFrontendErrors = Object.keys(frontendErrors).length > 0;
    if (!hasFrontendErrors) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append("description", description);

      await dispatch(editMenuItemThunk(item, formData));
      closeModal()
      dispatch(getSingleRestaurantThunk(singleRestaurant.id))
      // await history.push(`/menu_item/${singleRestaurant.id}`)
    }
  };

  const submitCancel = () => {
    history.push(`/menu_item/edit/${item.id}`)
    closeModal()
  };

  return (
    <div id="update-menu-item">
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="PUT" id="edit-menu-item-form">
        <h1 className="menu-item-title">Update Menu Item</h1>

        <label className="add-menu-item-field">
          Menu Item Name
          <input
            id="menu-item-input-update"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        {frontendErrors.name && submitted && <p className="modal-error">{frontendErrors.name}</p>}
        <label className="add-menu-item-field">
          Price
          <input
            id="menu-item-input-update"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        {frontendErrors.price && submitted && <p className="modal-error">{frontendErrors.price}</p>}
        <label className="add-menu-item-field edit-menu-item-description">
          Description
          <input
            id="menu-item-input-update"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        {frontendErrors.description && submitted && <p className="modal-error">{frontendErrors.description}</p>}
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
      </form>
    </div>



  )
}

export default EditMenuItem;
