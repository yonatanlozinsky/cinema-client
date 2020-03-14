import * as actionTypes from '../actionTypes';

type modalType = 'deleteModal' | 'editModal';

interface IState {
    openModal?: modalType;
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

const setOpenModal = (state: IState, payload: IPayload) => (
  {
    ...state,
    openModal: payload,
  }
);

const handlerTypes: {[key: string]: Function} = {
  [actionTypes.SET_OPEN_MODAL]: setOpenModal,
};

const modalReducer = (state = initialState, { type, payload }: IAction) => {
  const handler = handlerTypes[type];
  if (handler) {
    return handler(state, payload);
  }
  return state;
};

export default modalReducer;
