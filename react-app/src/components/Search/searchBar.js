

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "../HomePage/RestaurantCard";
import  "./SearchBar.css"
export default function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant.allRestaurants);
  const [searchRestaurant, setSearchRestaurant] = useState(""); //store current value
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //stores list of restaurant
  const [restaurantClicked, setRestaurantClicked] = useState(false); //false unless user clicks
  const [showMenu, setShowMenu] = useState(false); //show menu
  const searchRef = useRef(null); //for clicking outside of search input

  useEffect(() => {
    dispatch(getAllRestaurantsThunk());
  }, [dispatch]);



//if there's input make restaurant into an array and look for restaurant.name and make the input lowerCase
  const handleSearch = () => {
    if (searchRestaurant) {
      const restaurantMatch = Object.values(restaurant).find(
        (restaurant) =>
          restaurant.name.toLowerCase() === searchRestaurant.toLowerCase()
      );



      if (restaurantMatch) {
        setSearchRestaurant("");
        setFilteredRestaurants([]);
        setRestaurantClicked(false);

      }
    }
  };

  const closeMenu = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

  const handleInputClick = () => {
    setShowMenu(true);
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleRestaurantClick = (restaurantId) => {
    setRestaurantClicked(true);

    history.push(`/restaurant/${restaurantId}`);
  };

  useEffect(() => {
    if (!restaurantClicked) {
      if (searchRestaurant === "") {
        setFilteredRestaurants([]);
      } else {
        const filtered = Object.values(restaurant).filter((restaurant) =>
          restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase())
        );
        setFilteredRestaurants(filtered.slice(0, 10));
      }
    }
  }, [searchRestaurant, restaurant, restaurantClicked]);

  return (
    <div id="search-bar">
      {showMenu && searchRestaurant !== "" && !restaurantClicked && (
        <div className="search-suggestions">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => handleRestaurantClick(restaurant.id)}
            className="search-suggestion"
            >
              <div key={restaurant.id} restaurant={restaurant} />
              <img className="search-image" src={restaurant.restaurant_image} alt={restaurant.name}></img>
             <div className="restaurant-search-info">
              <p>{restaurant.name}, {restaurant.price_range}</p>
              <p>{restaurant.city}, {restaurant.state}</p>
              
              </div> 
              </div>
              
           
          ))}
          {/* {filteredRestaurants.length > 0 && (
            <button className="search-button" type="submit" onClick={handleSearch}>Search</button>
          )} */}
        </div>
      )}
<div >
      <div className="search-input-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          ref={searchRef}
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder="Food, drinks, etc"
          onClick={handleInputClick}
          className="search-input"
        >
          </input>
          </div>

      </div>
    </div>
  );



}
