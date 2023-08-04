import { useState, useEffect } from 'react';
import "./StarRating.css";

const StarRatings = ({ rating, disabled, onChange, iconSize }) => {
  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
      setActiveRating(rating)
  }, [rating])

  const starIconHover = (index) => {
    if (!disabled) {
      setActiveRating(index);
    }
  }

  const starIconLeave = () => {
    if (!disabled) {
      setActiveRating(rating);
    }
  }

  return (
    <>
      <div className="rating-input">
        <div className={activeRating > 0 ? "filled" : "empty"}
          onMouseEnter={() => starIconHover(1)}
          onMouseLeave={() => starIconLeave()}
          onClick={() => onChange ? onChange(1) : ""}
        >
          <i className={iconSize === 'large' ? `fas fa-star fa-lg` : "fas fa-star"} style={iconSize === 'large' ? {fontSize:"50px"}: {}}></i>
        </div>
        <div className={activeRating > 1 ? "filled" : "empty"}
          onMouseEnter={() => starIconHover(2)}
          onMouseLeave={() => starIconLeave()}
          onClick={() => onChange ? onChange(2) : ""}
        >
          <i className={iconSize === 'large' ? `fas fa-star fa-lg` : "fas fa-star"} style={iconSize === 'large' ? {fontSize:"50px"}: {}}></i>
        </div>
        <div className={activeRating > 2 ? "filled" : "empty"}
          onMouseEnter={() => starIconHover(3)}
          onMouseLeave={() => starIconLeave()}
          onClick={() => onChange ? onChange(3) : ""}
        >
          <i className={iconSize === 'large' ? `fas fa-star fa-lg` : "fas fa-star"} style={iconSize === 'large' ? {fontSize:"50px"}: {}}></i>
        </div>
        <div className={activeRating > 3 ? "filled" : "empty"}
          onMouseEnter={() => starIconHover(4)}
          onMouseLeave={() => starIconLeave()}
          onClick={() => onChange ? onChange(4) : ""}
        >
          <i className={iconSize === 'large' ? `fas fa-star fa-lg` : "fas fa-star"} style={iconSize === 'large' ? {fontSize:"50px"}: {}}></i>
        </div>
        <div className={activeRating > 4 ? "filled" : "empty"}
          onMouseEnter={() => starIconHover(5)}
          onMouseLeave={() => starIconLeave()}
          onClick={() => onChange ? onChange(5) : ""}
        >
          <i className={iconSize === 'large' ? `fas fa-star fa-lg` : "fas fa-star"} style={iconSize === 'large' ? {fontSize:"50px"}: {}}></i>
        </div>
      </div>
    </>
  );
};

export default StarRatings;
