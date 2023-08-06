import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import "./FilterPrice.css"; 

export default function FilterPrice() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchPrice, setSearchPrice] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const price_range = ["$", "$$", "$$$", "$$$$"];

  const FilterPriceThunk = async (priceRange) => {
    try {
      const res = await fetch(`/api/search/restaurants?price_range=${priceRange}`);
      if (res.ok) {
        const result = await res.json();
        console.log("Filtered Restaurants:", result.restaurants);
        setFilteredRestaurant(result.restaurants);
      } else {
        console.log("API request failed with status:", res.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
//   useEffect(() => {
//      dispatch(FilterPriceThunk())
// }, [dispatch])


  const priceOnClick = (priceRange) => {
    if (searchPrice === priceRange) {
      setFilteredRestaurant([]);
    } else {
      setSearchPrice(priceRange);
      FilterPriceThunk(priceRange);
      history.push("/filter");
      
    }
  };

  const onClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };



return (
      <div id="filter-page-wrapper">
        {/* <div className="filter-container"> */}
          <div className="filter-wrapper">
            <h2>Filter by Price:</h2>
            <div className="price-buttons">
              {price_range.map((price) => (
                <button
                  key={price}
                  className="price-button"
                  onClick={() => priceOnClick(price)}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
       
          <div className="restaurant-cards-container">
            {filteredRestaurant.map((restaurant) => (
              <div className="one-restaurant-card">
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            </div>
            ))}
          </div>
     
      </div>
    );
    
  }
