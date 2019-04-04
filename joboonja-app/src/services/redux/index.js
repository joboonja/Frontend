import { combineReducers } from 'redux';
import Profile from '../../scenes/Profile/services/reducers';

const JoboonjaApp = combineReducers({
  Profile,
});

export default JoboonjaApp;
