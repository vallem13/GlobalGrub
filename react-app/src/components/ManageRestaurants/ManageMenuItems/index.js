// view all menu items for a restaurant


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min"
// import deleteMenuItem from "../Restaurant/DeleteRestaurant"
// import editMenuItemThunk from "../Restaurant/EditRestaurant"
import { getSingleRestaurantThunk } from '../../../store/restaurant';
import CreateMenuItem from './CreateMenuItem';
import EditMenuItem from './EditMenuItem';
import OpenModalButton from '../../OpenModalButton'
import DeleteMenuItem from './DeleteMenuItem';



const ManageMenuItems = (  ) => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
    const items = restaurant.menu_items || [];
    console.log("ITEMS", items)

    useEffect(() => {
        dispatch(getSingleRestaurantThunk(restaurantId));
      }, [dispatch, restaurantId]);
    

    //   const createNewMenuItemButton = (menuItemsId) => {
    //     history.push(`/edit/${menuItemsId}`)
    // }

    return (
        <>
        <h2>Manage {restaurant.name}'s Menu Items</h2>
        <Link to={`/new/${restaurantId}`}>Create Menu Item</Link>
        <div className='menu-items-wrapper'>
        {items.map((item) => (
          <div className='single-menu-items-wrapper' key={item.id}>
            <div className="image-container">
            <OpenModalButton  buttonText="Edit Menu Item" modalComponent={<EditMenuItem item={item.id}/>}/>
            <OpenModalButton  buttonText="Delete Menu Item" modalComponent={<DeleteMenuItem item={item.id}/>}/>

              <img className="menu-image" src={item.menu_item_image} alt={item.name} />
             
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-price">
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}


export default ManageMenuItems
