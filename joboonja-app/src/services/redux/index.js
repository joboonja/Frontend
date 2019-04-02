import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Profile from '../../scenes/Profile/services/reducers';

const JoboonjaApp = combineReducers({
  Profile,
},
applyMiddleware(thunk));

export default JoboonjaApp;
