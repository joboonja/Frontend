import { createAction } from 'redux-actions';
import { requestForUsers } from './getUsersAction';

export const userValueChanged = createAction('USER_VALUE_CHANGED');

export function userSearchChanged(userValue) {
  return (dispatch) => {
    dispatch(userValueChanged(userValue));
    dispatch(requestForUsers(userValue));
  };
}
