import {
  SIGN_OUT,
  SIGN_IN,
  CHANGE_PROJECT,
  CHANGE_DOCUMENT,
  CHANGE_PAGE,
  CHANGE_PROJECTS_FILTER_TERM,
  CHANGE_NAVBAR_HEIGHT,
  CHANGE_FOOTER_HEIGHT
} from './types';

export const changeFooterHeight = height => {
  return {
    type: CHANGE_FOOTER_HEIGHT,
    payload: height
  };
};

export const changeNavbarHeight = height => {
  return {
    type: CHANGE_NAVBAR_HEIGHT,
    payload: height
  };
};

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    payload: page
  };
};

export const changeProjectFilterTerm = term => {
  return {
    type: CHANGE_PROJECTS_FILTER_TERM,
    payload: term
  };
};

export const changeDocument = document => {
  return {
    type: CHANGE_DOCUMENT,
    payload: document
  };
};

export const changeProject = project_files => {
  return {
    type: CHANGE_PROJECT,
    payload: project_files
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

// export const fetchUser = () => dispatch => {
//   dispatch({ type: FETCH_USER, payload: {greeting: "Hello"}});
// };

// export const changeProject = project_key => {
//   return {
//     type: CHANGE_PROJECT,
//     payload: project_key
//   };
// };

//
