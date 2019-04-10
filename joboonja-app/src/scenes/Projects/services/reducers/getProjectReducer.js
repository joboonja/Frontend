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
    [projectReqSuccess]: (state, { payload: { project } }) => ({
      ...state, project, loading: false,
    }),
  },
  {
    project: {
      title: '',
      description: '',
      imageURL: '',
      budget: '',
      skills: [],
    },
    loading: false,
    error: '',
  },
);
export default getProjectReducer;
