import { handleActions } from 'redux-actions';
import { projectValueChanged } from '../actions/projectSearchAction';

const projectSearchReducer = handleActions({
  [projectValueChanged]: (state, { payload: projectSearch }) => ({
    ...state, projectSearch, valid: projectSearch !== '',
  }),
},
{
  projectSearch: '',
  valid: false,
});

export default projectSearchReducer;
