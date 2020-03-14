import * as actionTypes from '../actionTypes';
import { IOpenModal } from '../../interfaces/modal';
interface IState {
};

interface IAction {
    type: string;
    payload: {};
};

type ISetOpenModalPayload = IOpenModal;


const initialState: IState = {
};

const setOpenModal = (state: IState, payload: ISetOpenModalPayload) => (
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
