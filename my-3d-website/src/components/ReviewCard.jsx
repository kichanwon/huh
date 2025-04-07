import React, { useState } from 'react';
import WhiskeyBottle from './WhiskeyBottle';

const ReviewCard = ({ review, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starValue = i;
      const isHalfStar = rating + 0.5 === starValue;
      const isFullStar = rating >= starValue;
      
      stars.push(
        <div key={i} className="star-container">
          <span
            className={`star ${isFullStar ? 'full' : 'empty'}`}
          >
            ★
          </span>
          <span
            className={`star half-star ${isHalfStar ? 'active' : ''}`}
          >
            ★
          </span>
        </div>
      );
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="review-card-header">
        <h3>{review.name}</h3>
        <div className="rating">
          <div className="star-rating">
            {renderStars(review.rating)}
          </div>
          <span className="rating-value">{review.rating}/5</span>
        </div>
      </div>
      
      <div className="bottle-container">
        <WhiskeyBottle />
      </div>

      <div className="review-details">
        <p className="brand">브랜드: {review.brand}</p>
        <p className="price">가격: {review.price}</p>
        
        <div className="review-content">
          <p className={`review-text ${isExpanded ? 'expanded' : ''}`}>
            {review.review}
          </p>
          {review.review.length > 100 && (
            <button 
              className="expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '접기' : '더 보기'}
            </button>
          )}
        </div>

        <div className="card-actions">
          <button onClick={() => onEdit(review)} className="edit-button">
            수정
          </button>
          <button onClick={() => onDelete(review.id)} className="delete-button">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
