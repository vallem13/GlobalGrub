import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSingleRestaurantThunk } from "../../../store/restaurant";
import { createMenuItemThunk, getSingleMenuItemThunk } from "../../../store/menu";
import './ManageMenu.css';
const CreateMenuItem = () => {


  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [menu_item_image, setMenu_item_image] = useState(null);
  const [frontendErrors, setFrontendErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);


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

  }, [name, price, description, menu_item_image])

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMenu_item_image(file)
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      }

      reader.readAsDataURL(file);
    }
  };



  return (
    <div id="create-menu" style={{  }}>

      <form onSubmit={handleSubmit} id="create-menu" encType="multipart/form-data" method='POST'  >
        <h1 id="restaurant-title">Create Your Menu Item</h1>
        <label className="add-menu-item-field" style={{ 
          alignItems: "self-start" }}>
          <p> Menu Item Name </p>
          <input
            id="menu-item-input-update"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        {frontendErrors.name && submitted && <p className="modal-error">{frontendErrors.name}</p>}

        <label className="add-menu-item-field" style={{ 
          alignItems: "self-start" }}>
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

        <label className="add-menu-item-field" style={{ 
          alignItems: "self-start" }}>                    Description
          <input
            id="menu-item-input-update"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        {frontendErrors.description && submitted && <p className="modal-error">{frontendErrors.description}</p>}

        <div className="store-image-preview" style={{ alignSelf: "start" }}>
  <label className="store-image-preview" style={{ 
          alignItems: "self-start" }}>
    Store Preview Image
    <input
      style={{ display: "none" }}
      className="hidden-input"
      id="menu-item-input-update"
      type="file"
      accept="image/*, image/jpeg, image/jpg, image/gif"
      onChange={handleImageChange}
    />
    <span
  className="material-symbols-outlined"
  style={{
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    cursor: "pointer",
    border: imagePreview ? "none" : "1px solid #ccc" 
  }}
  onClick={() => document.getElementById('menu-item-input-update').click()}
>
  {!imagePreview && "image"}
  
  {imagePreview && (
    <img 
      src={imagePreview} 
      alt="Preview" 
    />
  )}
</span>
  </label>
</div>

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

