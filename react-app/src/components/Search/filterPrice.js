// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import RestaurantCard from "../HomePage/RestaurantCard";
// import "./FilterPrice.css";

// export default function FilterPrice() {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const [searchPrice, setSearchPrice] = useState("");
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const price_range = ["$", "$$", "$$$", "$$$$"];

//   const FilterPriceThunk = async (priceRange) => {
//     try {
//       const res = await fetch(`/api/search/restaurants?price_range=${priceRange}`);
//       if (res.ok) {
//         const result = await res.json();
//         console.log("Filtered Restaurants:", result.restaurants);
//         setFilteredRestaurant(result.restaurants);
//       } else {
//         console.log("API request failed with status:", res.status);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
// // "  useEffect(() => {
// //      dispatch(FilterPriceThunk(priceRange))
// // }, [dispatch])


//   const priceOnClick = (priceRange) => {
//     if (searchPrice === priceRange) {
//       setFilteredRestaurant([]);
//     } else {
//       setSearchPrice(priceRange);
//       FilterPriceThunk(priceRange);
//       history.push(`/filter/${priceRange}`);

//     }
//   };

//   const onClick = (restaurantId) => {
//     history.push(`/restaurant/${restaurantId}`);
//   };



// return (
//       <div id="filter-page-wrapper">

//           <div className="pper">
//             <h2>Filter by Price:</h2>
//             <div className="price-buttons">
//               {price_range.map((price) => (
//                 <button
//                   key={price}
//                   className="price-button"
//                   onClick={() => priceOnClick(price)}
//                 >
//                   {price}
//                 </button>
//               ))}
//             </div>

//           </div>
//           <div className="restaurant-cards-container">
//             {filteredRestaurant.map((restaurant) => (
//               <div className="one-restaurant-card">
//                 <RestaurantCard key={restaurant.id} restaurant={restaurant} />
//             </div>
//             ))}
//           </div>

//       </div>
//     );

//   }

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../HomePage/RestaurantCard";
import "./FilterPrice.css";

export default function FilterPrice() {
  const history = useHistory();

  const [searchPrice, setSearchPrice] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const price_range = ["$", "$$", "$$$", "$$$$"];

  const fetchRestaurantsByPriceRange = async (priceRange) => {
    try {
      const res = await fetch(`/api/search/restaurants?price_range=${priceRange}`);
      if (res.ok) {
        const result = await res.json();
        setFilteredRestaurant(result.restaurants);
      } else {
        // Handle error from the server
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    if (searchPrice) {
      fetchRestaurantsByPriceRange(searchPrice);
      history.push(`/filter/${searchPrice}`);
    } else {
      setFilteredRestaurant([]);
    }
  }, [searchPrice]);

  const handlePriceButtonClick = (priceRange) => {
    if (searchPrice === priceRange) {
      setFilteredRestaurant([]);
      setSearchPrice("");
    } else {
      setSearchPrice(priceRange);
      fetchRestaurantsByPriceRange(priceRange);
      history.push(`/filter/${priceRange}`);
    }
  };


  const handleRestaurantClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (
    <div id="filter-page-wrapper">
      <div className="pper">
        <h2>Filter by Price:</h2>
        <div className="price-buttons">
          {price_range.map((price) => (
            <button
              key={price}
              className="price-button"
              onClick={() => handlePriceButtonClick(price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      <div className="cuisine-restaurants">
        {filteredRestaurant.map((restaurant) => (
          <div className="one-restaurant-card" onClick={() => handleRestaurantClick(restaurant.id)}>
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}
