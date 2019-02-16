import { CHANGE_PAGE } from '../actions/types';

const INITIAL_STATE = {
    page: 1
};

export default function pageReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case CHANGE_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}