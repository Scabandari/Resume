import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from "./projectReducer";
import documentReducer from "./documentReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
    auth: authReducer,
    currentProject: projectReducer,
    currentDoc: documentReducer,
    currentPage: pageReducer
});