import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRestaurantThunk, getAllRestaurantsThunk } from "../../store/restaurant";
import "./Restaurant.css";

const CreateRestaurant = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants))
    const newRestaurant = restaurants[restaurants.length - 1]
    const [name, setName] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [restaurantImage, setRestaurantImage] = useState(null);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [errors, setErrors] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedCuisineType, setSelectedCuisineType] = useState('');

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
        if (!restaurantImage) {
            frontendErrors.restaurantImage = "An image is required to create a Restaurant."
        }
        if (!selectedCuisineType) {
            frontendErrors.selectedCuisineType = "Restaurant cuisine type is required to create a Restaurant"
        }


        if (!newRestaurant) return null

        setFrontendErrors(frontendErrors)
    }, [name, selectedPriceRange, description, address, city, state, zipcode, contactNumber, restaurantImage, selectedCuisineType])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)

        const hasFrontendErrors = Object.keys(frontendErrors).length > 0;
        if (!hasFrontendErrors) {

            const formData = new FormData();
            formData.append("name", name);
            formData.append("price_range", selectedPriceRange);
            formData.append("description", description);
            formData.append("address", address);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("zipcode", zipcode);
            formData.append("contact_phone_number", contactNumber);
            formData.append("restaurant_image", restaurantImage);
            formData.append("cuisine_type_id", selectedCuisineType.id);
            formData.append('user_id', user.id)

            setImageLoading(true);

            if (!restaurantImage) return null

            const data = await dispatch(createRestaurantThunk(formData));
            await dispatch(getAllRestaurantsThunk())
            await history.push('/my_restaurants')
        }

    };

    return (


        <form onSubmit={handleSubmit} encType="multipart/form-data" id="create-restaurant-form">
            <div className="page-content">
                <div className="content-left">
                    <h1>Let us help you grow your business</h1>
                    <h3>Connect with more customers and grow your business on your terms.</h3>
                </div>
                <div className="content-right">
                    <h1 className="restaurant-title">Add your Restaurant</h1>
                    <div className="form-fields">
                        <label className="add-restaurant-field">
                            Restaurant Name
                            <input
                                className="restaurant-input"
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

                        <label className="add-restaurant-field">
                            Description
                            <input
                                className="restaurant-input"
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
                                className="restaurant-input"
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
                                className="restaurant-input"
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
                                className="restaurant-input"
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
                                className="restaurant-input"
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
                                className="restaurant-input"
                                type="text"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                required
                            />
                        </label>

                        <label className="add-restaurant-field">
                            Store Image
                            <input
                                className="restaurant-input"
                                type="file"
                                accept="image/*, image/jpeg, image/jpg, image/gif"
                                onChange={(e) => setRestaurantImage(e.target.files[0])}
                            />
                        </label>
                        {frontendErrors.restaurantImage && submitted && (
                            <p className="modal-error">{frontendErrors.restaurantImage}</p>
                        )}

                        <label className="add-restaurant-field">
                            Cuisine Type
                            <select
                                className="restaurant-dropdown"
                                value={selectedCuisineType}
                                onChange={(e) => {
                                    const selectedId = e.target.value;
                                    const selectedName =
                                        cuisineTypeOptions.find((option) => option.id === selectedId)
                                            ?.name || '';
                                    console.log("Selected Cuisine Type:", selectedName); // Add this line for debugging
                                    setSelectedCuisineType({ id: selectedId, name: selectedName });
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

                        {frontendErrors.selectedCuisineType && submitted && (
                            <p className="modal-error">{frontendErrors.selectedCuisineType}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="modal-button save-pin-button restaurant-save-button"
                    >
                        Save
                    </button>
                    {imageLoading && <p className="loading-message">Loading...</p>}
                </div>
            </div>
        </form>




    );
};

export default CreateRestaurant;
