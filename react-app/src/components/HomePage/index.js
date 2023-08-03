import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "./RestaurantCard";



const HomePage = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));
  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
  }, [dispatch])

  return (
    <div>
      {restaurants.map(restaurant => (
       <div>
       {restaurants.map(restaurant => (
         <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
           ))}
     </div >
      ))}
    </div >
  );
};
export default HomePage;
