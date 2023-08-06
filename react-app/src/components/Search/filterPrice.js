import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import "./filterPrice.css"; // Make sure to import your CSS file

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
    <div className="filter-container">
      <h2>Filter by Price:</h2>
      <div className="price-buttons">
        {price_range.map((price) => (
          <span
            key={price}
            className={`price-button ${searchPrice === price ? "active" : ""}`}
            onClick={() => priceOnClick(price)}
          >
            {price}
          </span>
        ))}
      </div>
      {/* <div className="restaurant-cards"> */}
        {filteredRestaurant.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-filter-card"
            onClick={() => onClick(restaurant.id)}
          >
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
   
  );
}
