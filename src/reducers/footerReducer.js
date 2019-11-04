import { CHANGE_FOOTER_HEIGHT } from '../actions/types';

const INITIAL_STATE = {
  height: 124
};

export default function footerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FOOTER_HEIGHT:
      return { ...state, height: action.payload };
    default:
      return state;
  }
}