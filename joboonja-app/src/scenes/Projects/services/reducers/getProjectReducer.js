import { handleActions } from 'redux-actions';
import { projectReqError, projectReqSuccess, projectReqSent } from '../actions/getProjectActions';
import { addBidReqSuccess } from '../actions/addBidActions';

const getProjectReducer = handleActions(
  {
    [addBidReqSuccess]: (state) => {
      const newProject = state.project;
      newProject.hasBidOrNot = true;
      return ({
        ...state, project: newProject,
      });
    },
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
      winner: '',
      hasBidOrNot: false,
    },
    loading: false,
    error: '',
  },
);
export default getProjectReducer;
