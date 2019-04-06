import { handleActions } from 'redux-actions';
import { profileReqError, profileReqSuccess, profileReqSent } from '../actions/getProfileActions';
import { removeSkillError, removeSkillSent } from '../actions/removeSkillActions';
import { endorseReqSuccess } from '../actions/endorseActions';
import { addSkillReqSuccess } from '../actions/addSkillAction';

const getProfileReducer = handleActions(
  {
    [profileReqSent]: state => ({
      ...state, loading: true,
    }),
    [profileReqError]: (state, { payload: error }) => ({
      ...state, error: error.toString(), loading: false,
    }),
    [profileReqSuccess]: (state, { payload: { profile } }) => ({
      ...state, profile, loading: false,
    }),
    [removeSkillSent]: (state, { payload: skill }) => {
      const newProfile = state.profile;
      newProfile.skillsList = state.profile.skillsList.filter(item => skill.name !== item.name);

      return {
        ...state, profile: newProfile,
      };
    },
    [removeSkillError]: (state, { payload: { skill } }) => {
      const newProfile = state.profile;
      newProfile.skillsList = [skill].concat(state.profile.skillsList);
      return {
        ...state, profile: newProfile,
      };
    },
    [addSkillReqSuccess]: (state, { payload: { skills } }) => {
      const newProfile = state.profile;
      newProfile.skillsList = skills;
      return ({
        ...state, profile: newProfile,
      });
    },
    [endorseReqSuccess]: (state, { payload: { skills } }) => {
      const newProfile = state.profile;
      newProfile.skillsList = skills;
      return ({
        ...state, profile: newProfile,
      });
    },
  },
  {
    profile: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      bio: '',
      profilePictureURL: '',
      skillsList: [],
    },
    loading: false,
    error: '',
  },
);
export default getProfileReducer;
