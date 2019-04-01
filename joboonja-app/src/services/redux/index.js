import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const JoboonjaApp = combineReducers({

},
applyMiddleware(thunk));

export default JoboonjaApp;
