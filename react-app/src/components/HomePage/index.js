import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRestaurantsThunk } from "../../store/restaurant";
import './HomePage.css';
import { useHistory } from "react-router-dom";
import FilterPrice from "../Search/filterPrice";
import RestaurantCard from "../HomePage/RestaurantCard";



const RestaurantCarousel = () => {
  const dispatch = useDispatch();
  const restaurants = Object.values(useSelector(state => state.restaurant.allRestaurants));
  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
  }, [dispatch])
  const history = useHistory()

  const handleOnClick = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  }

  const sortRestaurants = Object.values(restaurants).sort((a, b) => b.average_rating - a.average_rating);
  const highestRated = sortRestaurants.slice(0, 9);

  const [topRatedIdx, setTopRatedIdx] = useState(0);
  // const [allRestaurantsIdx, setAllRestaurantsIdx] = useState(0);
  const itemsPerPage = 3;

  const handleClickNext = (carouselType) => {
    if (carouselType === 'topRated') {
      setTopRatedIdx((topRatedIdx + 1) % (highestRated.length - itemsPerPage + 1));
    }
    // else if (carouselType === 'allRestaurants') {
    //   setAllRestaurantsIdx((allRestaurantsIdx + 1) % (restaurants.length - itemsPerPage + 1));
    // }
  };

  const handleClickPrev = (carouselType) => {
    if (carouselType === 'topRated') {
      setTopRatedIdx((topRatedIdx - 1 + highestRated.length - itemsPerPage + 1) % (highestRated.length - itemsPerPage + 1));
    }
    // else if (carouselType === 'allRestaurants') {
    //   setAllRestaurantsIdx((allRestaurantsIdx - 1 + restaurants.length - itemsPerPage + 1) % (restaurants.length - itemsPerPage + 1));
    // }
  };



  const displayHighestRatedRestaurants = highestRated.slice(topRatedIdx, topRatedIdx + itemsPerPage);
  // const displayAllRestaurants = restaurants.slice(allRestaurantsIdx, allRestaurantsIdx + itemsPerPage);


  return (

    <div className="home">
      <div className="carousel-wrapper-filter">
        <FilterPrice />
      </div>
      <div className="both-carousel-wrapper">
        <div className="carousel-wrapper" >
          <div className="carousel-button-title">
            <div className="carousel-title">
              <h3 >Highest Rated Restaurants</h3>
            </div>
            <div className="carousel-icons">
              <span class="material-symbols-outlined" onClick={() => handleClickPrev('topRated')}>
                arrow_circle_left
              </span>
              <span class="material-symbols-outlined"  onClick={() => handleClickNext('topRated')}>
                arrow_circle_right
              </span>
    
              
            </div>
          </div>
          <div className="carousel-top-wrapper" >
            {displayHighestRatedRestaurants.map(restaurant => (
              <div
                key={restaurant.id}
                className="carousel-item"
                onClick={() => handleOnClick(restaurant.id)} // Handle click to navigate to restaurant details
              >
                <img
                  src={restaurant.restaurant_image}
                  alt="Restaurant"
                // style={{ width: 'auto', height: '150px' }}
                />
                <div className="carousel-item-details">
                  <div className="restaurant-carousel-name">{restaurant.name}</div>
                  <button className="restaurant-carousel-avg">{restaurant.average_rating.toFixed(1)}</button>
                </div>
                </div>
            ))}
          </div>

        </div>
        <div className="all-restaurant-wrapper" >
          <h3 >View All Restaurants</h3>
          <div className="restaurant-container">
            {restaurants.map(restaurant => (
              <div className="single-restaurant"
                key={restaurant.id}

                onClick={() => handleOnClick(restaurant.id)}
              > 
                <img
                  src={restaurant.restaurant_image}

                />
                <div >
                  <div >{restaurant.name}</div>
                  {/* <button className="restaurant-carousel-avg">{restaurant.average_rating.toFixed(1)}</button> */}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}


export default RestaurantCarousel;
