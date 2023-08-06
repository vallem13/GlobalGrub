import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import "./FilterPrice.css"; // Make sure to import your CSS file

export default function FilterPrice() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchPrice, setSearchPrice] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const price_range = ["$", "$$", "$$$", "$$$$"];

  const FilterPriceThunk = async (priceRange) => {
    const res = await fetch(`/api/search/restaurants?price_range=${priceRange}`);
    if (res.ok) {
      const result = await res.json();
      setFilteredRestaurant(result.restaurants);
    }
  };

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
      <div className="filter-page-container">
        <div className="filter-container">
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
        </div>
        <div className="restaurant-cards-container">
          <div className="restaurant-cards">
            {filteredRestaurant.map((restaurant) => (
              // <div key={restaurant.id} className="restaurant-card">
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              
            ))}
          </div>
        </div>
      </div>
    );
    
  }
