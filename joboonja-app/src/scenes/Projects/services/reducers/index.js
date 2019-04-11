import { combineReducers } from 'redux';
import getProjectReducer from './getProjectReducer';
import addBidReducer from './addBidReducer';

const Project = combineReducers({
  getProjectReducer,
  addBidReducer,
});

export default Project;
