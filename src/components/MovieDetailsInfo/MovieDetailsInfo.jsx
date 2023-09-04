import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetailsInfo.module/MovieDetailsInfo.module.css';
import noImg from '../../resources/noImg.png';

function MovieDetailsInfo({ movie }) {
  return (
    <div className={styles.movieInfo}>
      <div className={styles.posterContainer}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noImg}
          alt={movie.title}
          className={styles.poster}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.releaseDate}>Release date: {movie.release_date}</p>
        <p className={styles.voteAverage}>Vote average: {movie.vote_average}</p>
        <h3 className={styles.overview}>Overview</h3>
        <p className={styles.overviewText}>{movie.overview}</p>
      </div>
    </div>
  );
}

MovieDetailsInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetailsInfo;
