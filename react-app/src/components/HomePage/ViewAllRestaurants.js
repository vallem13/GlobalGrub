import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "../HomePage/RestaurantCard";
import './HomePage.css';




const AllRestaurants = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllRestaurantsThunk());
  }, [dispatch]);

  const [allRestaurantsIdx, setAllRestaurantsIdx] = useState(0);
  const itemsPerPage = 6

  const handleClickNext = () => {
    setAllRestaurantsIdx((allRestaurantsIdx + itemsPerPage) % restaurants.length);
  };

  const handleClickPrev = () => {
    setAllRestaurantsIdx(
      (allRestaurantsIdx - itemsPerPage + restaurants.length) % restaurants.length
    );
  };

  const displayAllRestaurants = restaurants.slice(allRestaurantsIdx, allRestaurantsIdx + itemsPerPage);

  const onClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (
    <div id="cuisine-restaurant-wrapper">
      <h1 className='carousel-title'> View All Restaurants</h1>
      <div className="carousel-buttons">
        {allRestaurantsIdx > 0 && (
          <button className="prev-button" onClick={handleClickPrev}>
            &lt;
          </button>
        )}
        {displayAllRestaurants.length === itemsPerPage && (
          <button className="next-button" onClick={handleClickNext}>
            &gt;
          </button>
        )}
      </div>
      <div className='cuisine-restaurants'>
        {displayAllRestaurants.map((restaurant) => (
          <div key={restaurant.id} onClick={() => onClick(restaurant.id)}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;