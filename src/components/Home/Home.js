import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api.services/api.services';
import TrendingMoviesList from '../TrendingMoviesList/TrendingMoviesList';
import'./Home.module/Home.module.css'

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TrendingMoviesList movies={trendingMovies || []} />
      )}
    </div>
  );
}

export default Home;
