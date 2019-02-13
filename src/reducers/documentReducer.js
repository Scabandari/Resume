import { CHANGE_DOCUMENT } from '../actions/types';
import { PROBLEM_STATEMENT } from '../components/Projects/constants';

const INITIAL_STATE = {
    doc: PROBLEM_STATEMENT
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_DOCUMENT:
            return {...state, doc: action.payload};
        default:
            return state;
    }
}