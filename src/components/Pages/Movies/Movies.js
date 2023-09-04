import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../../../api.services/api.services';

import MoviesList from '../../MoviesList/MoviesList';
import SearchForm from '../../SearchForm/SearchForm';

function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); 

  useEffect(() => {
    if (location.search) {
      const queryParams = new URLSearchParams(location.search);
      const queryParamValue = queryParams.get('query');
      if (queryParamValue) {
        setQuery(queryParamValue);
        search(queryParamValue);
        return;
      }
    }
    fetchTrending();
  }, [location.search, query]);

  const fetchTrending = async () => {
    try {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const search = async query => {
    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSearch = query => {
    if (query.trim()) {
      setQuery(query);
      search(query);
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <SearchForm onSearch={handleSearch} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;
