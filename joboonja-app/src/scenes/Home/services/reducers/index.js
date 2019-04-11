import { combineReducers } from 'redux/es/redux';
import getUsersReducer from './getUsersReducer';
import getProjectsReducer from './getProjectsReducer';
import projectSearchReducer from './projectSearchReducer';

const Home = combineReducers({
  getUsersReducer,
  getProjectsReducer,
  projectSearchReducer,
});

export default Home;
