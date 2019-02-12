import { CHANGE_PROJECT } from '../actions/types';

const INITIAL_STATE = {
    currentProject: 'SENTIMENT_ANALYSIS',
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_PROJECT:
            return {...state, currentProject: action.payload};
        default:
            return state;
    }
}