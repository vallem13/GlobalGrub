import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import { useLocation } from "react-router-dom";

import { getFilteredRestaurants, setSearchPrices, clearFilters } from "../../store/filter";
import "./FilterPrice.css";

export default function FilterPrice() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const filteredRestaurants = useSelector(state => state.filter.filteredRestaurants);
  const searchPrices = useSelector(state => state.filter.searchPrices);

  const price_range = ["$", "$$", "$$$", "$$$$"];

  //We want to be retreive the filtered restaurants from the store
  //We want to be able to display restaurants based on the price range
  //We want to be able to filter through multiple price ranges

  // First create a variable that stores the search prices
  // Then make a conditional that checks if the search prices includes the price rang
  // If it does, then we want to remove it from the search prices because that means the user has already clicked on that price range
  // If it doesn't, then we want to add it to the search prices because that means the user has not clicked on that price range
  // dispatch setSearchPrices with the updatedSearchPrices
  // if not active price range is clicked that means the filter is cleared push to home
  // YAY!!



  const handlePriceButtonClick = (priceRange) => {
    let updatedSearchPrices;

    if (searchPrices.includes(priceRange)) {
      updatedSearchPrices = searchPrices.filter(price => price !== priceRange);
    } else {
      updatedSearchPrices = [...searchPrices, priceRange];
    }

    dispatch(setSearchPrices(updatedSearchPrices));

    const priceRanges = updatedSearchPrices.join(',');
    if (updatedSearchPrices.length === 0) {
      dispatch(clearFilters());
      history.push('/');
    } else {
      dispatch(getFilteredRestaurants(updatedSearchPrices));
      history.push(`/filter/${priceRanges}`);
    }
  };


  // We want to clear the filters when the user leaves the filter page
  // Right now when the user leaves the filter page, the filters are still applied to the home page
  // However when the user is at the home page we don't want to dispatch clear filters
  // UseEffect to listen to the history and route change
  // If the route does not start with /filter/ then dispatch clear filters then we want to dispatch clear filer

  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (!location.pathname.startsWith('/filter/')) {
        dispatch(clearFilters());
      }
    });

    return () => {
      unlisten();
    }
  }, [dispatch, history]);

  const handleRestaurantClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  const allRestaurants = Object.values(filteredRestaurants).flat();

  return (
    <div id="filter-page-wrapper">
      <div className="pper">
        <h2>Price Range:</h2>
        {allRestaurants.length > 0 && <p>{allRestaurants.length} restaurants</p>}
        <div className="price-buttons">
          {price_range.map((price) => (
            <button
              key={price}
              className={`price-button ${searchPrices.includes(price) ? 'active' : ''}`}
              onClick={() => handlePriceButtonClick(price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      <div className="cuisine-restaurants">
        {allRestaurants.map((restaurant) => (
          <div className="one-restaurant-card" onClick={() => handleRestaurantClick(restaurant.id)}>
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}
