import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from '../CastList/CastList';
import { fetchMovieCredits } from '../api.services/api.services';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const credits = await fetchMovieCredits(movieId);
        setCast(credits);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <CastList cast={cast} />
    </div>
  );
}

export default Cast;
