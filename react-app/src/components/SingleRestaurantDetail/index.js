import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteReviewModal from '../ReviewModal/DeleteReviewModal';
import CreateReviewModal from '../ReviewModal/CreateReviewModal';
import EditReviewModal from '../ReviewModal/EditReviewModal';
import { addItem } from '../../store/cart';
import StarRatings from "../StarRatings/starRating"
import './SingleRestaurant.css'


export default function SingleRestaurant() {

  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const [, setIsLoading] = useState(true);
  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  const items = restaurant.menu_items || [];
  const user = useSelector((state) => state.session.user);
  const reviews = restaurant.reviews || [];
  const orders = user.order_carts || [];
  const rating = restaurant.average_rating || ('')

  useEffect(() => {
    dispatch(getSingleRestaurantThunk(restaurantId));
    setIsLoading(false);
  }, [dispatch, restaurantId]);

  let restaurant_ids = []
  orders.map(order => restaurant_ids.push(order.restaurant_id))

  const reverse_reviews = [...reviews].reverse()
  const check_order = restaurant_ids.find(order => restaurant.id === order)
  const previousReview = user && reviews.find((review) => review.user_id === user.id)

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div id="single-restaurant-wrapper">
      <div className='restaurant-wrapper'>
        <img className="single-prevImg" src={restaurant.restaurant_image} alt={restaurant.name}></img>
        <h2>{restaurant.name}</h2>
      </div>
      <h3 className='menu-review-title'>Menu</h3>
      <div className='menu-items-wrapper'>
        {items.map((item) => (
          <div className='single-menu-items-wrapper' key={item.id}>
            <div className="image-container">
              <img className="menu-image" src={item.menu_item_image} alt={item.name} />
              <button className="add-to-cart-button" onClick={(e) => {
                e.preventDefault();
                dispatch(addItem(item));
              }}>
                <i className="fa-solid fa-circle-plus" style={{ fontSize: "3rem", color: "#f00b51" }}></i>
              </button>
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-price">
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="reviews-wrapper">
        <h3 className='menu-review-title'>{Number(rating).toFixed(2)} <i class="fa-solid fa-star" style={{ color: "#f00b52" }}></i> · {reviews.length} {reviews.length > 1 ? "Reviews" : "Review"}</h3>
        <div>
          <div className='post-review-container'>
            {check_order && (restaurant.user_id !== user.id) && !previousReview ? (
              <div className='review-buttons'>
                <OpenModalButton className='review-buttons' buttonText="Post Your Review" modalComponent={<CreateReviewModal user_id={user.id} restaurant={restaurant} />} />
              </div>
            ) : ('')}
          </div>
        </div>
        <div className="review-list">
          {reverse_reviews.map((review) => (
            <div className="review-item" key={review.id}>
              <div className="rating-container">
                {review ? (<StarRatings rating={review.rating} disabled={true} />) : (<StarRatings rating={0} disabled={true} />)}
              </div>
              <div className="review-details">
                <p className='review-fristName'>{review.user.firstName}</p>
                <h3>{review.comment}</h3>
              </div>
              {previousReview && (review.user_id === user.id) ? (
                <div className="review-actions">
                  <div className='review-buttons'>
                    <OpenModalButton
                      buttonText="Edit Your Review"
                      modalComponent={<EditReviewModal restaurant={restaurant} review={review} user_id={user.id} />}
                    />
                  </div>
                  <div className='review-buttons'>
                    <OpenModalButton
                      buttonText="Delete Review"
                      modalComponent={<DeleteReviewModal reviewId={review.id} restaurantId={restaurant.id} />}
                    />
                  </div>
                </div>
              ) : ('')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
