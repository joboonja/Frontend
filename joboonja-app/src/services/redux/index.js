import { combineReducers } from 'redux';
import Profile from '../../scenes/Profile/services/reducers';
import Project from '../../scenes/Projects/services/reducers';
import Home from '../../scenes/Home/services/reducers';
import Login from '../../scenes/Login/services/reducer';
import Register from '../../scenes/Register/services/reducer';

const JoboonjaApp = combineReducers({
  Profile,
  Project,
  Home,
  Login,
  Register,
});

export default JoboonjaApp;
