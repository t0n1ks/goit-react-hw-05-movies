import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import {
  HomePage,
  MovieDetailsPage,
  CastPage,
  ReviewsPage,
  MoviesPage
} from '../LazyComponents/LazyComponents';


function App() {
  return (
    <Router>
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="*" element={<HomePage/>} /> 
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
