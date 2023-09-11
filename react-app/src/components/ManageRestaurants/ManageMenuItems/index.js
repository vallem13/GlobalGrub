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
  const history = useHistory();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  const items = restaurant.menu_items || [];
  console.log("ITEMS", items)
const ManageMenuItems = () => {
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
        <h3>{items.length <= 0 ? 'Add your first Menu Item!' : 'Manage your Restaurants'}</h3>

        <Link to={`/new/${restaurantId}`}>Create Menu Item</Link>
        <div className='menu-items-wrapper'>
        {items.map((item) => (
          <div className='single-menu-items-wrapper' key={item.id}>
            <div className="image-container">
            <OpenModalButton  buttonText="Edit Menu Item" modalComponent={<EditMenuItem item={item.id}/>}/>
            <OpenModalButton  buttonText="Delete Menu Item" modalComponent={<DeleteMenuItem item={item.id}/>}/>

              <img className="menu-image" src={item.menu_item_image} alt={item.name} />

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
              <h4 className='title'>price: </h4>
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
