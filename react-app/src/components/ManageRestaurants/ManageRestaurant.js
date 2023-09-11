import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import OpenModalButton from '../OpenModalButton'
import DeleteRestaurant from "../Restaurant/DeleteRestaurant"
import EditRestaurant from "../Restaurant/EditRestaurant"
import EditRestaurantImage from "../Restaurant/EditRestaurantImage"
import { getAllRestaurantsThunk } from "../../store/restaurant"
import "./ManageRestaurant.css"

const ManageRestaurants = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const restaurantObj = useSelector(state => state.restaurant.allRestaurants)
    const restaurants = restaurantObj ? Object.values(restaurantObj) : [];
    const userRestaurants = restaurants.filter(restaurant => restaurant.user_id === user.id)

    useEffect(() => {
        dispatch(getAllRestaurantsThunk());
    }, [dispatch]);

    const createNewRestaurantButton = () => {
        history.push('/restaurant/new-restaurant')
    }

    const onClick = (restaurantId) => {
        history.push(`/restaurant/${restaurantId}`);
    };

    return (
        <div className="manage-restaurants-page">
            <div className="title-create-container">
                <h1>{userRestaurants.length <= 0 ? 'Add your first Restaurant!' : 'Manage your Restaurants'}</h1>
                <button className="create-restaurant-button" onClick={createNewRestaurantButton} >Create a New Restaurant</button>
            </div>
            <div className="restaurant-cards-buttons-container">
                {userRestaurants.map(restaurant => (
                    <div className="single-restaurant-cards-buttons">
                        <div className='single-restaurant-card'>
                            <div className='image-button-container'>
                                <img
                                    className='restaurant-image'
                                    src={restaurant.restaurant_image}
                                    alt="Restaurant" />
                                <OpenModalButton
                                    buttonText={<i class="fa-solid fa-pen-to-square" style={{ fontSize: "3rem", color: "#f00b51" }}></i>}
                                    modalComponent={<EditRestaurantImage restaurant={restaurant} />} />
                            </div>
                            <div className='single-restaurant-info'>
                                <div>
                                    <h4 className='title'>Name: </h4>
                                    <h4>{restaurant.name}</h4>
                                </div>
                                <div>
                                    <h4 className='title'>Address: </h4>
                                    <h4>{restaurant.address}, {restaurant.city} {restaurant.state}, {restaurant.zipcode}</h4>
                                </div>
                                <div>
                                    <h4 className='title'>Phone: </h4>
                                    <h4>{restaurant.contact_phone_number}</h4>
                                </div>
                                <div>
                                    <h4 className='title'>Price Range: </h4>
                                    <h4>{restaurant.price_range}</h4>
                                </div>
                                <div>
                                    <h4 className='title'>Description: </h4>
                                    <h4>{restaurant.description}</h4>
                                </div>
                            </div>


                            {/* <RestaurantCard key={restaurant.id} manage={true} restaurant={restaurant} /> */}
                        </div>
                        <div className="buttons-container">
                            <button onClick={() => onClick(restaurant.id)}>View Restaurant</button>
                            <OpenModalButton buttonText="Edit Restaurant Info" modalComponent={<EditRestaurant restaurant={restaurant} />} />
                            <OpenModalButton buttonText="Delete Restaurant" modalComponent={<DeleteRestaurant restaurantId={restaurant.id} />} />
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}


export default ManageRestaurants
