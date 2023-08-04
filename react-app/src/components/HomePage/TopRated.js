import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "./RestaurantCard";

const TopRated = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));
  
  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
  }, [dispatch])

  const chunkSize = 3; // Number of restaurants per page
  const maxDisplayedRestaurants = 9
  const topRatedRestaurants = [...restaurants].sort((a, b) => b.average_rating - a.average_rating).slice(0, maxDisplayedRestaurants);
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const displayedRestaurants = topRatedRestaurants.slice(currentIdx, currentIdx + chunkSize);

  const handleNext = () => {
    setCurrentIdx(currentIdx + chunkSize);
  };

  const handlePrevious = () => {
    setCurrentIdx(Math.max(currentIdx - chunkSize, 0));
  };

  return (
    <div>
      {displayedRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}

      <button onClick={handlePrevious} disabled={currentIdx === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIdx + chunkSize >= topRatedRestaurants.length}>
        Next
      </button>
    </div>
  );
};

export default TopRated;