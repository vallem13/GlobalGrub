import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "./RestaurantCard";
import TopRated from "./TopRated";



const HomePage = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));

  

  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
  }, [dispatch])

  restaurants.sort((a, b) => b.average_rating - a.average_rating);



  return (
    <div>

      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    
      <h3>TOP RATED RESTAURANTS</h3>
      <TopRated restaurants={restaurants} />
    </div >
  );
};
export default HomePage;