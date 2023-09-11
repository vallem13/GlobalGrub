import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from '../../context/Modal';
import { useHistory } from "react-router-dom";
import { editRestaurantThunk, getAllRestaurantsThunk } from "../../store/restaurant";
import "./Restaurant.css";

const EditRestaurant = ({ restaurant }) => {

  const { closeModal } = useModal();
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);
  const [address, setAddress] = useState(restaurant.address);
  const [city, setCity] = useState(restaurant.city);
  const [state, setState] = useState(restaurant.state);
  const [zipcode, setZipcode] = useState(restaurant.zipcode);
  const [contactNumber, setContactNumber] = useState(restaurant.contact_phone_number);
  const [selectedPriceRange, setSelectedPriceRange] = useState(restaurant.price_range || "");
  const [selectedCuisineType, setSelectedCuisineType] = useState(restaurant.cuisine_type_id || "");
  const [frontendErrors, setFrontendErrors] = useState({});
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const priceRangeOptions = [
    { value: '$', label: '$' },
    { value: '$$', label: '$$' },
    { value: '$$$', label: '$$$' },
    { value: '$$$$', label: '$$$$' },
  ];

  const cuisineTypeOptions = [
    { id: 1, name: 'Korean' },
    { id: 2, name: 'Japanese' },
    { id: 3, name: 'Peruvian' },
    { id: 4, name: 'Vietnamese' },
    { id: 5, name: 'Mexican' },
    { id: 6, name: 'Spanish' },
    { id: 7, name: 'French' },
    { id: 8, name: 'Mediterranean' },
    { id: 9, name: 'Thai' },
    { id: 10, name: 'Somali' },
    { id: 11, name: 'Jamaican' },
    { id: 12, name: 'Indian' },
  ];

  const [selectedCuisineTypeName, setSelectedCuisineTypeName] = useState(
    restaurant.cuisine_type_id
      ? cuisineTypeOptions.find((option) => option.id === restaurant.cuisine_type_id)
        ?.name || ""
      : ""
  );

  useEffect(() => {
    const frontendErrors = {}
    if (name.length < 1) {
      frontendErrors.name = "Restaurant name must be at least 1 character"
    }
    if (name.length > 50) {
      frontendErrors.name = "Restaurant name must be 50 characters or less"
    }
    if (!name) {
      frontendErrors.name = "Enter a Restaurant name"
    }
    if (!selectedPriceRange) {
      frontendErrors.selectedPriceRange = "Price range is required to create a Restaurant"
    }
    if (!description) {
      frontendErrors.description = "Restaurant description is required to create a Restaurant"
    }
    if (!address) {
      frontendErrors.address = "Restaurant address is required to create a Restaurant"
    }
    if (!city) {
      frontendErrors.city = "Restaurant city is required to create a Restaurant"
    }
    if (!state) {
      frontendErrors.state = "Restaurant state is required to create a Restaurant"
    }
    if (!zipcode) {
      frontendErrors.zipcode = "Restaurant zipcode is required to create a Restaurant"
    }
    if (!contactNumber) {
      frontendErrors.contactNumber = "Restaurant zipcode is required to create a Restaurant"
    }
    if (!selectedCuisineType) {
      frontendErrors.selectedCuisineType = "Restaurant cuisine type is required to edit a Restaurant"
    }

    setFrontendErrors(frontendErrors)
  }, [name, selectedPriceRange, description, address, city, state, zipcode, contactNumber, selectedCuisineType])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price_range", selectedPriceRange);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipcode", zipcode);
    formData.append("contact_phone_number", contactNumber);
    formData.append("cuisine_type_id", selectedCuisineType.id ? selectedCuisineType.id : selectedCuisineType);




    try {

      await dispatch(editRestaurantThunk(restaurant.id, formData));
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
    <div id="update-restaurant">

      <div id="scrollable-form-container">

      <form onSubmit={handleSubmit} id="edit-restaurant-form" encType="multipart/form-data" >
        <h1 id="restaurant-title">Edit your Restaurant</h1>
        <label className="add-restaurant-field">
          Restaurant Name
          <input
            className="restaurant-input-update"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        {frontendErrors.name && submitted && (
          <p className="modal-error">{frontendErrors.name}</p>
        )}

        <label className="add-restaurant-field">
          Price Range
          <select
            className="restaurant-dropdown"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            required
          >
            <option value="" disabled>
              Select price range
            </option>
            {priceRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        {frontendErrors.selectedPriceRange && submitted && (
          <p className="modal-error">{frontendErrors.selectedPriceRange}</p>
        )}

        <label className="add-restaurant-field edit-res-description">
          Description
          <textarea
            className="restaurant-input-update"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        {frontendErrors.description && submitted && (
          <p className="modal-error">{frontendErrors.description}</p>
        )}

        <label className="add-restaurant-field">
          Store address
          <input
            className="restaurant-input-update"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        {frontendErrors.title && submitted && (
          <p className="modal-error">{frontendErrors.title}</p>
        )}

        <label className="add-restaurant-field">
          City
          <input
            className="restaurant-input-update"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        {frontendErrors.city && submitted && (
          <p className="modal-error">{frontendErrors.city}</p>
        )}

        <label className="add-restaurant-field">
          State
          <input
            className="restaurant-input-update"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        {frontendErrors.state && submitted && (
          <p className="modal-error">{frontendErrors.state}</p>
        )}

        <label className="add-restaurant-field">
          Zipcode
          <input
            className="restaurant-input-update"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </label>
        {frontendErrors.zipcode && submitted && (
          <p className="modal-error">{frontendErrors.zipcode}</p>
        )}

        <label className="add-restaurant-field">
          Contact Phone Number
          <input
            className="restaurant-input-update"
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </label>
        <label className="modal-label">
          Cuisine Type
          <select
            className="restaurant-dropdown"
            value={selectedCuisineType}
            onChange={(e) => {
              const selectedName = e.target.value;
              const selectedId = cuisineTypeOptions.find(
                (option) => option.name === selectedName
              )?.id || "";
              setSelectedCuisineType({ id: parseInt(selectedId), name: selectedName });
              setSelectedCuisineTypeName(selectedName);
            }}
            required
          >
            <option value="" disabled>
              Select cuisine type
            </option>
            {cuisineTypeOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
        {frontendErrors.selectedCuisineType && submitted && <p className="modal-error">{frontendErrors.selectedCuisineType}</p>}
        <button
          type="submit"
          onClick={submitCancel}
          className="cancel-pin-button"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="restaurant-save-button"
        >
          Save
        </button>
      </form>
      </div>


    </div>


  )

}


export default EditRestaurant;
