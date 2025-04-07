import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import './App.css';
import './components/Review.css';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('whiskeyReviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    localStorage.setItem('whiskeyReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (reviewData) => {
    if (editingReview) {
      setReviews(reviews.map(review => 
        review.id === editingReview.id 
          ? { ...reviewData, id: review.id }
          : review
      ));
      setEditingReview(null);
    } else {
      setReviews([...reviews, { ...reviewData, id: Date.now() }]);
    }
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>위스키 리뷰</h1>
        <ReviewForm 
          onSubmit={handleAddReview}
          initialData={editingReview}
        />
        <ReviewList
          reviews={reviews}
          onDelete={handleDeleteReview}
          onEdit={handleEditReview}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
