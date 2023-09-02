import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Routes, Route, Link, Outlet} from 'react-router-dom';
import MovieDetailsInfo from '../MovieDetailsInfo/MovieDetailsInfo';
import MovieDetailsNavigation from '../MovieDetailsNavigation/MovieDetailsNavigation';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { fetchMovieDetails } from '../api.services/api.services';
import styles from './MovieDetails.module/MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeTab] = useState('info');
 

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.backButtonContainer}>
        <Link to="/movies" className={styles.backButton}>
          Back to Movies
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.movieImageContainer}></div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<MovieDetailsInfo movie={movie} />} />
            <Route path="/cast" element={<Outlet />} />
            <Route path="/reviews" element={<Outlet />} />
          </Routes>
        </Suspense>
        <div className={styles.navigationContainer}>
          <MovieDetailsNavigation
            movieId={movieId}
            activeTab={activeTab}
          />
        </div>
        {activeTab === 'cast' && (
          <div className={styles.tabContent}>
            <Cast movieId={movieId} />
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className={styles.tabContent}>
            <Reviews movieId={movieId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
