import { handleActions } from 'redux-actions';
import { removeSkillError, removeSkillSuccess, removeSkillSent } from '../actions/removeSkillActions';

const removeSkillReducer = handleActions(
  {
    [removeSkillSent]: state => ({
      ...state, loading: true, success: false, error: '',
    }),
    [removeSkillError]: (state, { payload: { error } }) => ({
      ...state, error: error.toString(), loading: false,
    }),
    [removeSkillSuccess]: state => ({
      ...state, loading: false, success: true,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
  },
);
export default removeSkillReducer;
