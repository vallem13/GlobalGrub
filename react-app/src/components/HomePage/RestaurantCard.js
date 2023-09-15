import './RestaurantCard.css';

import { useHistory } from 'react-router';
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/restaurant/${restaurant.id}`)
    }
    return (

        <div className='single-restaurant-item-wrapper' onClick={onClick}>

            <img className='single-restaurant-image' src={restaurant.restaurant_image} alt="Restaurant" />
            <div className='single-restaurant-rating-name'>
                <div className='name-price'>
                    <h3 >{restaurant.name}</h3>
                    <h4>{restaurant.price_range}</h4>
                </div>
                {restaurant.average_rating !== null ? (
                    <p className='restaurant-average-rating'>{restaurant.average_rating.toFixed(1)}</p>

                ) : (
                    <p>No Reviews Yet</p>
                )}
            </div>
        </div>


    )
}
export default RestaurantCard;
