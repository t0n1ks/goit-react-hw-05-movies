import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewList.module/ReviewList.module.css';

function ReviewsList({ reviews }) {
  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id} className={styles.item}>
          <h3 className={styles.author}>{review.author}</h3>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
