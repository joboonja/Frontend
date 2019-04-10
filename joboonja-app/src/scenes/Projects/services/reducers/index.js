import { combineReducers } from 'redux';
import getProjectReducer from './getProjectReducer';

const Project = combineReducers({
  getProjectReducer,
});

export default Project;
