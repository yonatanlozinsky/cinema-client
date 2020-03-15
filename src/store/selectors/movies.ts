import { AppState } from '../reducers';

export const moviesSelector = (state: AppState) => state.movieReducer.movies;
export const moviesErrorSelector = (state: AppState) => state.movieReducer.error;
