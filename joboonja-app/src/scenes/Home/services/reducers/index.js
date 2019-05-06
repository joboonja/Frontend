import { combineReducers } from 'redux/es/redux';
import getUsersReducer from './getUsersReducer';
import getProjectsReducer from './getProjectsReducer';
import projectSearchReducer from './projectSearchReducer';
import userSearchReducer from './userSearchReducer';

const Home = combineReducers({
  getUsersReducer,
  getProjectsReducer,
  projectSearchReducer,
  userSearchReducer,
});

export default Home;
