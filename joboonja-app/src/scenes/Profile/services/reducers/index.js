import { combineReducers } from 'redux';
import getProfileReducer from './getPofileReducer';
import removeSkillReducer from './removeSkillReducer';
import addSkillReducer from './addSkillReducer';
import getAllSkillsReducer from './getAllSkillsReducer';
import endorseReducer from './endorseReducer';

const Profile = combineReducers({
  getProfileReducer,
  removeSkillReducer,
  addSkillReducer,
  getAllSkillsReducer,
  endorseReducer,
});

export default Profile;
