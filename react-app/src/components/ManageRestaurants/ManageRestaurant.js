import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom/cjs/react-router-dom.min"
import OpenModalButton from '../OpenModalButton'
import RestaurantCard from '../HomePage/RestaurantCard'
import DeleteRestaurant from "../Restaurant/DeleteRestaurant"
import EditRestaurant from "../Restaurant/EditRestaurant"
import "./ManageRestaurant.css"
import { getAllRestaurantsThunk } from "../../store/restaurant"
import ManageMenuItems from './ManageMenuItems';

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
    const handleManageMenu = (restaurantId) => {
        history.push(`/menu_item/${restaurantId}`)
    }

    return (
        <div className="">
            <div className="">
                <h1>{userRestaurants.length <= 0 ? 'Add your first Restaurant!' : 'Manage your Restaurants'}</h1>
                <button className="" onClick={createNewRestaurantButton} >Create a New Restaurant</button>
            </div>
            <div className="">
                {userRestaurants.map(restaurant =>(
                        <div className="">
                            <RestaurantCard key={restaurant.id} manage={true} restaurant={restaurant} />
                            <div className="">
                            <OpenModalButton buttonText="Edit Restaurant" modalComponent={<EditRestaurant restaurant={restaurant}/>}/>
                            <OpenModalButton buttonText="Delete Restaurant" modalComponent={<DeleteRestaurant restaurantId={restaurant.id}/>}/>
                            <button className="" onClick={() => handleManageMenu(restaurant.id)}>Manage Menu Items</button>
                            {/* <NavLink  to="/menu_item/:restaurantId" className="your-optional-class-name" restaurant={restaurant.id}>View Your Menu Items</NavLink> */}
                            </div>
                            
                        </div>
                    )
                )}
            </div>
        </div>
    )
}


export default ManageRestaurants
