import { combineReducers } from 'redux/es/redux';
import getUsersReducer from './getUsersReducer';
import getProjectsReducer from './getProjectsReducer';

const Home = combineReducers({
  getUsersReducer,
  getProjectsReducer,
});

export default Home;
