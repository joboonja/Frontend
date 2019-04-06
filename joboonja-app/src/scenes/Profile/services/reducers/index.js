import { combineReducers } from 'redux';
import getProfileReducer from './getPofileReducer';
import removeSkillReducer from './removeSkillReducer';
import addSkillReducer from './addSkillReducer';
import getAllSkillsReducer from './getAllSkillsReducer';

const Profile = combineReducers({
  getProfileReducer,
  removeSkillReducer,
  addSkillReducer,
  getAllSkillsReducer,
});

export default Profile;
