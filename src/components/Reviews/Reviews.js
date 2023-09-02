import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api.services/api.services';

import ReviewsList from '../ReviewList/ReviewList';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  });

  const fetchReviews = async () => {
    try {
      const response = await fetchMovieReviews(movieId);
      setReviews(response);
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? <ReviewsList reviews={reviews} /> : <p>No reviews available</p>}
    </div>
  );
}

export default Reviews;
