import { SIGN_OUT, SIGN_IN, CHANGE_PROJECT, CHANGE_DOCUMENT } from "./types";

// export const fetchUser = () => dispatch => {
//   dispatch({ type: FETCH_USER, payload: {greeting: "Hello"}});
// };

export const changeProject = project => {
  return {
    type: CHANGE_PROJECT,
    payload: project
  };
};

export const changeDocument = document => {
  return {
    type: CHANGE_DOCUMENT,
      payload: document
  };
};

export const signIn = googleId => {
    return {
        type: SIGN_IN,
        payload: googleId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
