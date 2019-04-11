import { combineReducers } from 'redux';
import Profile from '../../scenes/Profile/services/reducers';
import Project from '../../scenes/Projects/services/reducers';
import Home from '../../scenes/Home/services/reducers';

const JoboonjaApp = combineReducers({
  Profile,
  Project,
  Home,
});

export default JoboonjaApp;
