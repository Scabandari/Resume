import { SIGN_OUT, SIGN_IN } from "./types";

// export const fetchUser = () => dispatch => {
//   dispatch({ type: FETCH_USER, payload: {greeting: "Hello"}});
// };

export const signIn = googleId => {
    return {
        type: 'SIGN_IN',
        payload: googleId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};
