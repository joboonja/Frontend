import { combineReducers } from 'redux';
import getProfileReducer from './getPofileReducer';
import removeSkillReducer from './removeSkillReducer';

const Profile = combineReducers({
  getProfileReducer,
  removeSkillReducer,
});

export default Profile;
