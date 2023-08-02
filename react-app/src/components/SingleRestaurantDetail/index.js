import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSingleRestaurantThunk } from '../../store/restaurant'
import { useParams } from 'react-router-dom';
// import './SingleRestaurant.css'
import OpenModalButton from '../OpenModalButton'

export default function SingleRestaurant({menu_items}) {

    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const [, setIsLoading] = useState(true);
    const restaurant = useSelector(state => state.restaurant.singleRestaurant)
    console.log("THIS IS IT!!! -->", restaurant)

    useEffect(() => {
        dispatch(getSingleRestaurantThunk(restaurantId));
        setIsLoading(false)
    }, [dispatch, restaurantId]);

    if (!restaurant) return <div>Loading...</div>;

    const items = restaurant.menu_items
    console.log("ITEMS!!!!",items)

    return (
        <div className="single-restaurant-wrapper">
            <div >
                <img className='single-prevImg' src={restaurant.restaurant_image} alt={restaurant.name}></img>
            </div>
            <h1>{restaurant.name}</h1>
            <h2>Menu Items</h2>
            {/* <div>
                {restaurant.menu_items.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>$ {item.price}</p>
                    </div>

                ))}
            </div> */}


        </div>

    )
}
