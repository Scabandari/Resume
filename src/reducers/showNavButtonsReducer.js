import { NAVIGATION } from '../actions/types';

const INITIAL_STATE = {
    showing: false
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case NAVIGATION:
            return {...state, showing: action.payload};
        default:
            return state;
    }
};