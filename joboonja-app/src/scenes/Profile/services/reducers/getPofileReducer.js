import { handleActions } from 'redux-actions';
import { profileReqError, profileReqSuccess, profileReqSent } from '../actions/getProfileActions';

const getProfileReducer = handleActions(
  {
    [profileReqSent]: state => ({
      ...state, loading: true, error: '', profile: {},
    }),
    [profileReqError]: (state, { payload: error }) => ({
      ...state, error: error.toString(), loading: false,
    }),
    [profileReqSuccess]: (state, { payload: { profile } }) => ({
      ...state, profile, loading: false,
    }),
  },
  {
    profile: {},
    loading: false,
    error: '',
  },
);
export default getProfileReducer;
