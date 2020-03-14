import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({movieReducer, modalReducer});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;