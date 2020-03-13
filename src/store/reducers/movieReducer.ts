import * as actionTypes from '../actionTypes';
import { IMovie } from '../../interfaces/movie'; 

interface IState {
    error: string,
    movies?: IMovie
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


const handlerTypes: {[key: string]: Function} = {
  [actionTypes.FETCH_MOVIES_SUCCESS]: fetchMoviesSuccess,
  [actionTypes.FETCH_MOVIES_FAILURE]: fetchMoviesFailure,
};

const movieReducer = (state = initialState, { type, payload }: IAction) => {
  const handler = handlerTypes[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};

export default movieReducer;
