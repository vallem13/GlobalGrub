import { useHistory } from 'react-router';
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/restaurant/${restaurant.id}`)
    }
    return (
    <div onClick = {onClick}>
        <div>
        <img src={restaurant.restaurant_image} />
        <p> Restaurant: {restaurant.name}</p>
        <p>{restaurant.price_range}</p>
        <p>{restaurant.description}</p>
        <div>Location
        <p>{restaurant.address}</p>
        <p>{restaurant.city}</p>
        <p>{restaurant.state}</p>
        <p>{restaurant.zipcode}</p>
        </div>
        <p>{restaurant.contact_phone_number}</p>
        </div>
    </div>
        )
}
export default RestaurantCard;
