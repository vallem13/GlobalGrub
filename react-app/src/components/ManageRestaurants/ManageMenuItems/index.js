import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min"
import { getSingleRestaurantThunk } from '../../../store/restaurant';
import EditMenuItem from './EditMenuItem';
import EditMenuItemImage from './EditMenuItemImage';
import OpenModalButton from '../../OpenModalButton'
import DeleteMenuItem from './DeleteMenuItem';


const ManageMenuItems = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  const items = restaurant.menu_items || [];
  console.log("ITEMS", items)

  useEffect(() => {
    dispatch(getSingleRestaurantThunk(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <>
      <h2>Manage {restaurant.name}'s Menu Items</h2>
      <h3>{items.length <= 0 ? 'Add your first Menu Item!' : 'Manage your Restaurants'}</h3>

      <Link to={`/new/${restaurantId}`}>Create Menu Item</Link>
      <div className='menu-items-wrapper'>
        {items.map((item) => (
          <div className='single-menu-items-wrapper' key={item.id}>
            <div className="image-container">
              <OpenModalButton buttonText="Edit Menu Item" modalComponent={<EditMenuItem item={item.id} />} />
              <OpenModalButton buttonText="Delete Menu Item" modalComponent={<DeleteMenuItem item={item.id} />} />

              <div className='image-button-container'>
              <img className="menu-image" src={item.menu_item_image} alt={item.name} />
              <OpenModalButton
                buttonText={<i class="fa-solid fa-pen-to-square" style={{ fontSize: "3rem", color: "#f00b51" }}></i>}
                modalComponent={<EditMenuItemImage item={item} />} />
              </div>
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
