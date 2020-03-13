import { AppState } from '../reducers';

export const moviesSelector = (state: AppState) => state.movieReducer.movies;
