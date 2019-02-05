import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    //googleId: null
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case SIGN_OUT:
            return { ...state, isSignedIn: false };
        default:
            return state;
    }

    // switch (action.type) {
    //     case SIGN_IN:
    //         return { ...state, isSignedIn: true, googleId: action.payload };
    //     case SIGN_OUT:
    //         return { ...state, isSignedIn: false, googleId: null };
    //     default:
    //         return state;
    // }
}