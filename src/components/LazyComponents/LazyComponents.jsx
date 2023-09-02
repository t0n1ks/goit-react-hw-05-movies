import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('../Home/Home')
);

export const MoviesPage = lazy(() =>
  import('../Movies/Movies')
);

export const MovieDetailsPage = lazy(() =>
  import('../MovieDetails/MovieDetails')
);

export const CastPage = lazy(() =>
  import('../Cast/Cast')
);

export const ReviewsPage = lazy(() =>
  import('../Reviews/Reviews')
);
