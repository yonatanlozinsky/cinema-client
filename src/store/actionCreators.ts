import * as actionTypes from './actionTypes';
import { IOpenModal } from '../interfaces/modal';
import { IMovie } from '../interfaces/movie';


export const fetchMovies = () => {
    return {
        type: actionTypes.FETCH_MOVIES,
        payload: null
    };
};

export const setOpenModal = (payload?: IOpenModal) => {
    return {
        type: actionTypes.SET_OPEN_MODAL,
        payload
    };
};

export const deleteMovie = (movieId: number) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        payload: movieId
    };
};

export const editMovie = (movie: IMovie) => {
    return {
        type: actionTypes.EDIT_MOVIE,
        payload: movie
    };
};