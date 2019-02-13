import { CHANGE_PROJECT } from '../actions/types';

const INITIAL_STATE = {
    project_key: 'SENTIMENT_ANALYSIS'
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_PROJECT:
            return {...state, project_key: action.payload};
        default:
            return state;
    }
}