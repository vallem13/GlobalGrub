import { useHistory } from 'react-router';
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/restaurant/${restaurant.id}`)
    }
    return (
        <div className="restaurant-row" onClick={onClick}>
        <div className="restaurant-card">
          <img
            src={restaurant.restaurant_image}
            alt="Restaurant"
            style={{ width: '400px', height: '400px' }}
          />
          <h4>{restaurant.name}</h4>
          <p>{restaurant.price_range}</p>
          {restaurant.average_rating !== null ? (
            <p>{restaurant.average_rating.toFixed(1)}</p>
          ) : (
            <p>No Reviews Yet</p>
          )}
        </div>
      </div>
    )
}
export default RestaurantCard;
