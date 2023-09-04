import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../../api.services/api.services';
import styles from './MoviesList.module/MoviesList.module.css';

function MoviesList({ searchQuery, movies }) {
  const [moviesData, setMoviesData] = useState([]);

  const fetchMoviesData = useCallback(async () => {
    try {
      if (searchQuery) {
        const searchResults = await searchMovies(searchQuery);
        setMoviesData(searchResults.results);
      } else {
        const trendingMovies = await fetchTrendingMovies();
        setMoviesData(trendingMovies.results);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  const moviesToRender = movies.length > 0 ? movies : moviesData;

  return (
    <div className={styles.moviesListContainer}>
      <ul className={styles.moviesList}>
        {moviesToRender && moviesToRender.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
