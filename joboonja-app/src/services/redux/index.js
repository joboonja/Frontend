import { combineReducers } from 'redux';
import Profile from '../../scenes/Profile/services/reducers';
import Project from '../../scenes/Projects/services/reducers';

const JoboonjaApp = combineReducers({
  Profile,
  Project,
});

export default JoboonjaApp;
