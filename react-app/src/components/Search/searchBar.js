
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllRestaurantsThunk } from "../../store/restaurant";

export default function SearchBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const searchRef = useRef();
    const restaurant = useSelector(state => state.restaurant.allRestaurants);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
    useEffect(() => {
      dispatch(getAllRestaurantsThunk());
    }, [dispatch]);

//show all the restaurants when view all is clicked 
    const handleViewAll = () => {
        history.push("/home")
    }

    //event handler for when the user is typing 
    //update search restaurant state 
    const handleSearchInputs = (e) => {
      const searchInput = e.target.value;
      setSearchRestaurant(searchInput); 
      
      //user input needs to be 
      const restaurantInput = Object.values(restaurant).filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredRestaurants(restaurantInput);
    };


    return (
      <div>
        <input
          type="text"
          value={searchRestaurant}
          onChange={handleSearchInputs}
          placeholder="Search restaurants..."
        />
        <div>
          {filteredRestaurants.map(restaurant => (
            <div
              key={restaurant.id}
              onClick={() => {
                history.push(`/restaurant/${restaurant.id}`);
              }}
            >
              {restaurant.name}
            </div>
          ))}
        </div>
        {filteredRestaurants.length > 0 && (
        <button onClick={handleViewAll}>
          Search All Restaurants
        </button>
      )}
    </div>
  );
  }
  