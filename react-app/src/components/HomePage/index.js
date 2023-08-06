import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import RestaurantCard from "./RestaurantCard";
import './HomePage.css';
import FilterPrice from "../Search/filterPrice";

const RestaurantCarousel = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));
  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
  }, [dispatch])

  //sorts through restaurants in decending order
  const sortRestaurants = Object.values(restaurants).sort((a, b) => b.average_rating - a.average_rating);
  //selects the top 9
  const highestRated = sortRestaurants.slice(0, 9);

  //keeps track of the current index of the two courasels
  const [topRatedIdx, setTopRatedIdx] = useState(0);
  const [allRestaurantsIdx, setAllRestaurantsIdx] = useState(0);
  //display 3 restaurants at a time 
  const itemsPerPage = 3;

  //event handle for next
  const handleClickNext = (carouselType) => {
    //passed into handleClickNext 
    if (carouselType === 'topRated') {
      //topIdx starts at 0
      // when clicked next we add 1 and the new index is set to [1] etc..
      // if topRated has a length of 9 and its starts at 
      //(0 + 1) % (9-3 +7) 1 % 7 = 7
      //(1 + 1) % (7)
      // the highes idx that can be displayed while still having a page of 3

      setTopRatedIdx((topRatedIdx + 1) % (highestRated.length - itemsPerPage + 1));
    } else if (carouselType === 'allRestaurants') {
      setAllRestaurantsIdx((allRestaurantsIdx + 1) % (restaurants.length - itemsPerPage + 1));
    }
  };

  const handleClickPrev = (carouselType) => {
    if (carouselType === 'topRated') {
      setTopRatedIdx((topRatedIdx - 1 + highestRated.length - itemsPerPage + 1) % (highestRated.length - itemsPerPage + 1));
    } else if (carouselType === 'allRestaurants') {
      setAllRestaurantsIdx((allRestaurantsIdx - 1 + restaurants.length - itemsPerPage + 1) % (restaurants.length - itemsPerPage + 1));
    }
  };

  const displayHighestRatedRestaurants = highestRated.slice(topRatedIdx, topRatedIdx + itemsPerPage);
  const displayAllRestaurants = restaurants.slice(allRestaurantsIdx, allRestaurantsIdx + itemsPerPage);


return (

  <div className="carousel-wrapper">
  <div>
    <h3>Highest Rated Restaurants</h3>
    <div className="carousel-top-wrapper">
      {displayHighestRatedRestaurants.map(restaurant => (
        <div key={restaurant.id} className="carousel-item">
          <img
            src={restaurant.restaurant_image}
            alt="Restaurant"
            style={{ width: '250px', height: '250px' }}
          />
          
        </div>
      ))}
    </div>
    <div className="carousel-buttons">
      <button className="prev-button" onClick={() => handleClickPrev('topRated')}>
        &lt;
      </button>
      <button className="next-button" onClick={() => handleClickNext('topRated')}>
        &gt;
      </button>
    </div>
  </div>
  <div>
    <h3>View All Restaurants</h3>
    <div className="carousel">
      {displayAllRestaurants.map(restaurant => (
      
        <div key={restaurant.id} className="carousel-item">
          <img
            src={restaurant.restaurant_image}
            alt="Restaurant"
            style={{ width: '250px', height: '250px' }}
          />
          <div className="restaurant-name"> Restaurant {restaurant.name} </div>
        </div>
      ))}
    </div>
 
    <div className="carousel-buttons">
      <button className="prev-button" onClick={() => handleClickPrev('allRestaurants')}>
        &lt;
      </button>
      <button className="next-button" onClick={() => handleClickNext('allRestaurants')}>
        &gt;
      </button>
    </div>
  </div>
</div>
)
      }


export default RestaurantCarousel;
