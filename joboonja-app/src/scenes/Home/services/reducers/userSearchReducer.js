import { handleActions } from 'redux-actions';
import { userValueChanged } from '../actions/userSearchAction';

const userSearchReducer = handleActions({
  [userValueChanged]: (state, { payload: userSearch }) => ({
    ...state, userSearch, valid: userSearch !== '',
  }),
},
{
  userSearch: '',
});

export default userSearchReducer;
