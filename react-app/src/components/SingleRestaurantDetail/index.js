import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSingleRestaurantThunk } from '../../store/restaurant'
import { useParams } from 'react-router-dom';
// import './SingleRestaurant.css'
import OpenModalButton from '../OpenModalButton'

export default function SingleRestaurant() {

    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    const [, setIsLoading] = useState(true);
    const restaurant = useSelector(state => state.restaurant.singleRestaurant)
    const items = restaurant.menu_items || [];
    const user = useSelector(state => state.session.user)
    const reviews = restaurant.reviews || [];
    // console.log("THIS IS THE REVIEW --->", reviews)



    useEffect(() => {
        dispatch(getSingleRestaurantThunk(restaurantId));
        setIsLoading(false)
    }, [dispatch, restaurantId]);

    if (!restaurant) return <div>Loading...</div>;
    const checkReview = user && reviews.find(review => review.user_id === user.id)

    return (
        <div className="single-restaurant-wrapper">
            <div >
                <img className='single-prevImg' src={restaurant.restaurant_image} alt={restaurant.name}></img>
            </div>
            <h1>{restaurant.name}</h1>
            <h2>Menu Items</h2>
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <img className='menu-image' src={item.menu_item_image} alt={item.name}></img>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>

            <div className="reviews-container">
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h2>{review.comment}</h2>
                        <p>{review.rating}</p>
                        {/* <p>By: {review.user.firstName} {review.user.lastName}</p> */}
                    </div>

                ))}


            </div>
        </div>

    )
}
