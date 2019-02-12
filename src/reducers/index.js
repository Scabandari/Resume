import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from "./projectReducer";
import documentReducer from "./documentReducer";


export default combineReducers({
    auth: authReducer,
    currentProject: projectReducer(),
    currentDocument: documentReducer()
});