import { CHANGE_DOCUMENT } from '../actions/types';

const INITIAL_STATE = {
    document: 'PROBLEM_STATEMENT'
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_DOCUMENT:
            return {...state, document: action.payload};
        default:
            return state;
    }
}