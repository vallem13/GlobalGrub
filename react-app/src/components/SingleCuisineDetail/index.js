import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCuisineThunk } from "../../store/cuisine";
import { useParams, useHistory} from "react-router-dom";

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
    <div>

      <h1>Restaurants for {cuisine.type}</h1>


      {restaurants.map((restaurant) => (
        <div key={restaurant.id} onClick={() => onClick(restaurant.id)}>
          {restaurant.restaurant_image && (
          <img
              src={restaurant.restaurant_image}
              alt={restaurant.name}
              style={{ width: "200px", height: "200px" }}
            />
          )}
          <h4>{restaurant.name}</h4>
          <p>{restaurant.price_range}</p>
          {restaurant.average_rating !== null ? (
                    <p>{restaurant.average_rating.toFixed(1)}</p>
                ) : (
                    <p>No Reviews Yet</p>
                )}
        </div>
      ))}
    </div>

  );
};

export default SingleCuisine;
