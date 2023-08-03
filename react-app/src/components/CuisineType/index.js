import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCuisineThunk } from "../../store/cuisine";
import { useParams } from "react-router-dom";

const SingleCuisine = () => {
  const dispatch = useDispatch();
  const cuisine = useSelector((state) => state.cuisine.singleCuisine);
  // const restaurants = cuisine.restaurants || []


console.log("Show This ---->", cuisine)
  const { cuisineId } = useParams()

  console.log("Show This ---->", cuisine)

  useEffect(() => {

    dispatch(getSingleCuisineThunk(cuisineId));
  }, [dispatch, cuisineId]);
  console.log("Show This ---->", cuisineId)


  return (
    <div>
      {cuisine.id}
    </div>
    // <div>
    //   Render your restaurant data here
    //   <h1>Restaurants for Cuisine Type</h1>
    //   {restaurants.map((restaurant) => (
    //     <div key={restaurant.id}>
    //       <h2>{restaurant.name}</h2>
    //       {/* Render other restaurant details as needed */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default SingleCuisine;

