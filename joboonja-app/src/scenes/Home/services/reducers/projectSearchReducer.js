import { handleActions } from 'redux-actions';
import { projectSearchChanged } from '../actions/projectSearchAction';

const projectSearchReducer = handleActions({
  [projectSearchChanged]: (state, { payload: projectSearch }) => ({
    ...state, projectSearch, valid: projectSearch !== '',
  }),
},
{
  projectSearch: '',
  valid: false,
});

export default projectSearchReducer;
