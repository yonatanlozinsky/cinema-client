import * as actionTypes from '../actionTypes';
import { IMovie } from '../../interfaces/movie'; 

interface IState {
    error: string,
    movies?: {
      results: Array<IMovie>
    }
};

interface IAction {
    type: string,
    payload: {}
};

interface IPayload {
    payload: {}
};


const initialState = {
  error: '',
  movies: null,
};

const fetchMoviesSuccess = (state: IState, payload: IPayload) => (
  {
    ...state,
    movies: payload,
    error: null
  }
);

const fetchMoviesFailure = (state: IState, payload: IPayload) => (
  {
    ...state,
    movies: null,
    error: payload,
  }
);

const deleteMovie = (state: IState, payload: number) => (
  {
    ...state,
    movies: {
      ...state.movies,
      results: 
        state.movies && state.movies.results.filter(movie => movie.id !== payload)
    }
  }
);

const editMovie = (state: IState, payload: IMovie) => {
  return {
    ...state,
    movies: {
      ...state.movies,
      results: 
        state.movies && state.movies.results.map((movie: IMovie) => {
          if (movie.id === payload.id) {
            return payload;
          }
          return movie;
        })
    }
  }
};

const handlerTypes: {[key: string]: Function} = {
  [actionTypes.FETCH_MOVIES_SUCCESS]: fetchMoviesSuccess,
  [actionTypes.FETCH_MOVIES_FAILURE]: fetchMoviesFailure,
  [actionTypes.DELETE_MOVIE]: deleteMovie,
  [actionTypes.EDIT_MOVIE]: editMovie

};

const movieReducer = (state = initialState, { type, payload }: IAction) => {
  const handler = handlerTypes[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};

export default movieReducer;
