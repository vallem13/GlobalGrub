import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRestaurantThunk } from '../../store/restaurant';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteReviewModal from '../ReviewModal/DeleteReviewModal';
import CreateReviewModal from '../ReviewModal/CreateReviewModal';
import EditReviewModal from '../ReviewModal/EditReviewModal';
import { thunkCreateCart, updateNewOrders, updateOrderCart, addItem } from '../../store/cart';

export default function SingleRestaurant() {

  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const [, setIsLoading] = useState(true);
  const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
  const items = restaurant.menu_items || [];
  const user = useSelector((state) => state.session.user);
  const reviews = restaurant.reviews || [];

  useEffect(() => {
    dispatch(getSingleRestaurantThunk(restaurantId));
    setIsLoading(false);
  }, [dispatch, restaurantId]);

  console.log("these are the reviews", reviews)


  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="single-restaurant-wrapper">
      <div>
        <img className="single-prevImg" src={restaurant.restaurant_image} alt={restaurant.name}></img>
      </div>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img className="menu-image" src={item.menu_item_image} alt={item.name} style={{ width: '100px', height: '100px' }}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={(e) => {
              e.preventDefault();
              dispatch(addItem(item));
            }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="reviews-container">
        <div id="post-review-button">
          <OpenModalButton buttonText="Post Your Review" modalComponent={<CreateReviewModal user_id={user.id} restaurant={restaurant} />} />
        </div>

        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.comment}</h3>
            <p>{review.rating.toFixed(1)}</p>
            <p>
              {review.user.firstName} {review.user.lastName}
            </p>

            <OpenModalButton
              buttonText="Edit Your Review"
              modalComponent={<EditReviewModal restaurant={restaurant} review={review} user_id={user.id} />}
            />

            <OpenModalButton
              buttonText="Delete Review"
              modalComponent={<DeleteReviewModal reviewId={review.id} restaurantId={restaurant.id} />}
            />


          </div>
        ))}
      </div>
    </div>
  );
}
