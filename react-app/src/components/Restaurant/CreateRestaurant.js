import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { createRestaurantThunk, getAllRestaurantsThunk } from "../../store/restaurant";
import "./Restaurant.css";

const CreateRestaurant = () => {


    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants))
    const newRestaurant = restaurants[restaurants.length - 1]

    const [name, setName] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [restaurantImage, setRestaurantImage] = useState(null);
    const [cuisineType, setCuisineType] = useState('');
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



            if (data) {
                setErrors(data);
            } else {
                // await history.push('/profile')
                // await closeModal();
            }
        }

    };

    return (
        <div className="create-restaurant">
            <h1 className="restaurant-title">Add your Restaurant</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* <ul>
                    {errors.map((error, idx) => (
                        <li key={idx} className="modal-error">
                            {error}
                        </li>
                    ))}
                </ul> */}

                <label className="modal-label">
                    Restaurant Name
                    <input
                        className="modal-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.name && submitted && <p className="modal-error">{frontendErrors.name}</p>}
                <label className="modal-label">
                    Price Range
                    <select
                        className="modal-input"
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

                {frontendErrors.selectedPriceRange && submitted && <p className="modal-error">{frontendErrors.selectedPriceRange}</p>}
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
                {frontendErrors.description && submitted && <p className="modal-error">{frontendErrors.description}</p>}
                <label className="modal-label">
                    Store address
                    <input
                        className="modal-input"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.title && submitted && <p className="modal-error">{frontendErrors.title}</p>}
                <label className="modal-label">
                    City
                    <input
                        className="modal-input"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.city && submitted && <p className="modal-error">{frontendErrors.city}</p>}
                <label className="modal-label">
                    State
                    <input
                        className="modal-input"
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.state && submitted && <p className="modal-error">{frontendErrors.state}</p>}
                <label className="modal-label">
                    Zipcode
                    <input
                        className="modal-input"
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.zipcode && submitted && <p className="modal-error">{frontendErrors.zipcode}</p>}
                <label className="modal-label">
                    Contact Phone Number
                    <input
                        className="modal-input"
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </label>
                <label className="modal-label">
                    Store Image
                    <input
                        className="modal-input"
                        type="file"
                        accept="image/*, image/jpeg, image/jpg, image/gif"
                        onChange={(e) => setRestaurantImage(e.target.files[0])}
                    />
                </label>
                {frontendErrors.restaurantImage && submitted && <p className="modal-error">{frontendErrors.restaurantImage}</p>}
                <label className="modal-label">
                    Cuisine Type
                    <select
                        className="modal-input"
                        value={selectedCuisineType.id}
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            const selectedName = cuisineTypeOptions.find((option) => option.id === selectedId)?.name || '';
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

                {frontendErrors.selectedCuisineType && submitted && <p className="modal-error">{frontendErrors.selectedCuisineType}</p>}

                {/* <div className="modal-user">
                    <img
                        src={user.image}
                        style={{ width: '50px', height: '50px' }}
                        alt={user.firstName}
                    />
                    {user.first_name}
                </div> */}

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="modal-button save-pin-button"
                >
                    Save
                </button>
                {imageLoading && <p>Loading...</p>}
            </form>
        </div>
    );
};

export default CreateRestaurant;
