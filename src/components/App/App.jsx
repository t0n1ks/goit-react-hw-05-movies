import React, { Suspense } from 'react';
import { Route, Outlet, Navigate, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

const HomePage = React.lazy(() => import('../Pages/Home/Home'));
const MoviesPage = React.lazy(() => import('../Pages/Movies/Movies'));
const MovieDetailsPage = React.lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const CastPage = React.lazy(() => import('../Cast/Cast'));
const ReviewsPage = React.lazy(() => import('../Reviews/Reviews'));

function App() {
  return (
    <Router basename="/goit-react-hw-05-movies">    
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<><Container><AppBar/><Outlet/></Container></>}>
              <Route index element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId/*" element={<MovieDetailsPage/>}>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Route>
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense> 
    </Router>
  );
}

export default App;
