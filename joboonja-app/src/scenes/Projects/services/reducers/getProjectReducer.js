import { handleActions } from 'redux-actions';
import { projectReqError, projectReqSuccess, projectReqSent } from '../actions/getProjectActions';

const getProjectReducer = handleActions(
  {
    [projectReqSent]: state => ({
      ...state, loading: true,
    }),
    [projectReqError]: (state, { payload: error }) => ({
      ...state, error: error.toString(), loading: false,
    }),
    [projectReqSuccess]: (state, { payload: { profile } }) => ({
      ...state, profile, loading: false,
    }),
  },
  {
    // profile: {
    //   firstName: '',
    //   lastName: '',
    //   jobTitle: '',
    //   bio: '',
    //   profilePictureURL: '',
    //   skillsList: [],
    // },
    loading: false,
    error: '',
  },
);
export default getProjectReducer;
