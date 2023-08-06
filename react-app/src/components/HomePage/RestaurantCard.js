// CSS styling comes from SingleRestaurant.css

import { useHistory } from 'react-router';
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/restaurant/${restaurant.id}`)
    }
    return (
        <div onClick={onClick}>
            <div className='single-menu-items-wrapper'>
                <img className='menu-image' src={restaurant.restaurant_image} alt="Restaurant" />
                <div className='restaurant-name-rating-price'>
                    <div className='name-rating-card'>
                        <h3 className='restaurant-name'>{restaurant.name}</h3>
                        {restaurant.average_rating !== null ? (
                            <p className='restaurant-average-rating'>{restaurant.average_rating.toFixed(1)}</p>
                        ) : (
                            <p>No Reviews Yet</p>
                        )}
                    </div>
                    <p className='restaurant-price-range'>{restaurant.price_range}</p>
                </div>
            </div>
        </div>
    )
}
export default RestaurantCard;
