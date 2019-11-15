import { SET_SIDEBAR_SHOWING } from '../actions/types';

const INITIAL_STATE = {
  sidebarIsShowing: false
};

export default function navbarReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case SET_SIDEBAR_SHOWING:
      return { ...state, sidebarIsShowing: payload };
    default:
      return state;
  }
}
