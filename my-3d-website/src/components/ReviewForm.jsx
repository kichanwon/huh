import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    brand: '',
    rating: 5,
    review: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        name: '',
        brand: '',
        rating: 5,
        review: '',
        price: '',
        imageUrl: ''
      });
    }
  };

  const handleStarClick = (starValue, isHalf) => {
    const newRating = isHalf ? starValue - 0.5 : starValue;
    handleChange({ target: { name: 'rating', value: newRating } });
  };

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
            onClick={() => handleStarClick(starValue, false)}
          >
            ★
          </span>
          <span
            className={`star half-star ${isHalfStar ? 'active' : ''}`}
            onClick={() => handleStarClick(starValue, true)}
          >
            ★
          </span>
        </div>
      );
    }
    return stars;
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label htmlFor="name">위스키 이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="brand">브랜드</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>평점</label>
        <div className="star-rating">
          {renderStars(formData.rating)}
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.5"
            className="rating-input"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="price">가격</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="review">리뷰</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">이미지 URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">
        {initialData ? '리뷰 수정' : '리뷰 추가'}
      </button>
    </form>
  );
};

export default ReviewForm; 