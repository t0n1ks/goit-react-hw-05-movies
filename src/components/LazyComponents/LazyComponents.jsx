import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../Pages/Home/Home')
);

export const MoviesPage = lazy(() =>
  import('../Pages/Movies/Movies')
);

export const MovieDetailsPage = lazy(() =>
  import('..//Pages/MovieDetails/MovieDetails')
);

export const CastPage = lazy(() =>
  import('../Cast/Cast')
);

export const ReviewsPage = lazy(() =>
  import('../Reviews/Reviews')
);
