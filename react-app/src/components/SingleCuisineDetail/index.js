import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCuisineThunk } from "../../store/cuisine";
import { useParams, useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import './SingleCuisineDetail.css'

const SingleCuisine = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const cuisine = useSelector((state) => state.cuisine.singleCuisine);
  // console.log("WHAT IS THIS ----->", cuisine)
  const restaurants = cuisine.restaurants || []


  const { cuisineId } = useParams()


  useEffect(() => {

    dispatch(getSingleCuisineThunk(cuisineId));
  }, [dispatch, cuisineId]);


  const onClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`)
  }


  return (
    <div id="cuisine-restaurant-wrapper">
      <h1>{cuisine.type} Cuisine</h1>
      <div className='cuisine-restaurants'>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} onClick={() => onClick(restaurant.id)}>
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default SingleCuisine;