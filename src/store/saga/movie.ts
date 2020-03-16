import { takeLatest, put } from 'redux-saga/effects';
import { fetchPopularMovies as fetchPopularMoviesAPI  } from '../../api/movies';
import * as actionTypes from '../actionTypes';

export function* fetchPopularMovies() {
    try {
        const response = yield fetchPopularMoviesAPI();
        const { data } = yield response;
        yield put({
            type: actionTypes.FETCH_MOVIES_SUCCESS,
            payload: data
        });
    } catch (error) {

        yield put({
            type: actionTypes.FETCH_MOVIES_FAILURE,
            payload: JSON.stringify(error.response.status)
        });
    }
};

export default function* watchMoviesSaga() {
    yield takeLatest(actionTypes.FETCH_MOVIES, fetchPopularMovies);
};