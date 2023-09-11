import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from "react-router-dom/cjs/react-router-dom.min"
import { getSingleRestaurantThunk } from '../../../store/restaurant';
import EditMenuItem from './EditMenuItem';
import EditMenuItemImage from './EditMenuItemImage'
import OpenModalButton from '../../OpenModalButton'
import DeleteMenuItem from './DeleteMenuItem';

const ManageMenuItems = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  const items = restaurant.menu_items || [];

  useEffect(() => {
    dispatch(getSingleRestaurantThunk(restaurantId));
  }, [dispatch, restaurantId]);

  const createNewMenuItemButton = (restaurantId) => {
    history.push(`/new/${restaurantId}`)
  }

  const onClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (
    <div className="manage-restaurants-page">
      <div className="title-create-container">
        <h1>Manage {restaurant.name}'s Menu</h1>
        <h3>{items.length <= 0 ? 'Add your first Menu Item!' : ''}</h3>
        <button className="create-restaurant-button" onClick={() => createNewMenuItemButton(restaurantId)}>Create a New Menu Item</button>
      </div>
      <div className="restaurant-cards-buttons-container">
        {items.map((item) => (
          <div className="single-restaurant-cards-buttons" key={item.id}>
            <div className='single-restaurant-card' style={{}} >
              <div className='image-button-container'>
                <img style={{ objectFit: "cover", width: "150px", height: "150px" }} className='restaurant-image' src={item.menu_item_image} alt={item.name} />
                <OpenModalButton
                buttonText={<i class="fa-solid fa-pen-to-square" style={{ fontSize: "1.5rem", color: "#f00b51" }}></i>}
                modalComponent={<EditMenuItemImage item={item} />} />
              </div>
              <div className='single-restaurant-info'>
                <div>
                  <h4 className='title'>Name: </h4>
                  <h4>{item.name}</h4>
                </div>
                <div>
                  <h4 className='title'>Description: </h4>
                  <h4>{item.description}</h4>
                </div>
                <div>
                  <h4 className='title'>Price: </h4>
                  <h4>${item.price.toFixed(2)}</h4>
                </div>
              </div>
              <div className="buttons-container">
                <button onClick={() => onClick(restaurant.id)}>View Restaurant</button>
                <OpenModalButton buttonText="Edit Menu Item Info" modalComponent={<EditMenuItem item={item.id} />} />
                <OpenModalButton buttonText="Delete Menu Item" modalComponent={<DeleteMenuItem item={item.id} />} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageMenuItems
