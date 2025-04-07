import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const filteredReviews = reviews
    .filter(review => 
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="review-list">
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="위스키 이름 또는 브랜드로 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="rating">평점순</option>
          <option value="name">이름순</option>
        </select>
      </div>

      <div className="reviews-grid">
        {filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList; 