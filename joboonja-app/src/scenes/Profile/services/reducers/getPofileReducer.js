import { handleActions } from 'redux-actions';
import { profileReqError, profileReqSuccess, profileReqSent } from '../actions/getProfileActions';

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
