const API_KEY = 'b07e0fe67ef678118a4e6eba95afb560'; 

export async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieCredits(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
}
