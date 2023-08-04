import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function FilterPrice() {
  const history = useHistory();
  const dispatch = useDispatch();

//   const onClick = () => {
//     history.push(`/restaurant/${restaurant.id}`)
// }

  const [searchPrice, setSearchPrice] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const price_range = ["$", "$$", "$$$", "$$$$"];
  const priceRangeImages = {
    "$": "https://icon-library.com/images/dollar-icon/dollar-icon-23.jpg", 
    "$$": "https://icon-library.com/images/dollar-icon/dollar-icon-23.jpg",
    "$$$": "https://icon-library.com/images/dollar-icon/dollar-icon-23.jpg",
    "$$$$": "https://icon-library.com/images/dollar-icon/dollar-icon-23.jpg"

  };

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
    history.push(`/restaurant/${restaurantId}`)
}

  return (
    <div>
      <h2>Filter by Price:</h2>
      {price_range.map((price) => (
        <span key={price} onClick={() => priceOnClick(price)}>
        <img src={priceRangeImages[price]} alt={price} width="20" height="20" />

    

        </span>
      ))}
     
        <div>
          
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filteredRestaurant.map((restaurant) => (
                
                <div key={restaurant.id} onClick={() => onClick(restaurant.id)} >
                   {/* <p>{filteredRestaurant.length} Results</p> */}
                  <h3>{restaurant.name}</h3>
                  {restaurant.restaurant_image && (
            <img 
              src={restaurant.restaurant_image}
              alt={restaurant.name}
              style={{ width: "200px", height: "200px" }} 
            />
          )}
                </div>
              ))}
            </div>
        
        </div>
     
    </div>
  );
}