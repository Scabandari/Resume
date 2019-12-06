import {
  SIGN_OUT,
  SIGN_IN,
  CHANGE_PROJECT,
  CHANGE_DOCUMENT,
  CHANGE_PAGE,
  CHANGE_PROJECTS_FILTER_TERM,
  SET_SIDEBAR_SHOWING
} from './types';

export const setSidebarShowing = showing => {
  return {
    type: SET_SIDEBAR_SHOWING,
    payload: showing
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

