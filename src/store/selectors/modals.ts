import { AppState } from '../reducers';

export const openModalSelector = (state: AppState) => state.modalReducer.openModal?.openModal;
export const currentMovieIdSelector = (state: AppState) => state.modalReducer.openModal?.currentMovieId;
