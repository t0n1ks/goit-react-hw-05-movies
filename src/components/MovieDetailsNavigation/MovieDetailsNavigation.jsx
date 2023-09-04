import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import styles from './MovieDetailsNavigation.module/MovieDetailsNavigation.module.css';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

function MovieDetailsNavigation() {
  const [activeTab, setActiveTab] = useState('');
  const { movieId } = useParams();

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    const tabUrl = tab === 'cast' ? `movies/${movieId}/cast` : `movies/${movieId}/reviews`;
    window.history.pushState(null, null, `/goit-react-hw-05-movies/${tabUrl}`)
  };

  return (
    <div className={styles.navigation}>
      <h3 className={styles.title}>Additional Information</h3>
      <ul className={styles.links}>
        <li>
          <button
            onClick={() => handleTabChange('cast')}
            className={styles.link}
            style={{
              fontWeight: activeTab === 'cast' ? 'bold' : 'normal',
            }}
          >
            Cast
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabChange('reviews')}
            className={styles.link}
            style={{
              fontWeight: activeTab === 'reviews' ? 'bold' : 'normal',
            }}
          >
            Reviews
          </button>
        </li>
      </ul>
      {activeTab === 'cast' && <Cast movieId={movieId} />}
      {activeTab === 'reviews' && <Reviews movieId={movieId} />} 
    </div>
  );
}

export default MovieDetailsNavigation;
