import { all } from 'redux-saga/effects';
import movieSaga from './movie';

export default function* watchRootSaga() {
    yield all([movieSaga()]);
};
