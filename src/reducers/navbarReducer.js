import { CHANGE_NAVBAR_HEIGHT } from '../actions/types';

const INITIAL_STATE = {
  height: 61
};

export default function navbarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_NAVBAR_HEIGHT:
      return { ...state, height: action.payload };
    default:
      return state;
  }
}
