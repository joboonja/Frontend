import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { usersReqSent, usersReqErr, usersReqSuccess } = createActions(
  'USERS_REQ_SENT',
  'USERS_REQ_ERR',
  'USERS_REQ_SUCCESS',
);
export function requestForUsers() {
  return (dispatch) => {
    dispatch(usersReqSent());
    Axios.get(urlsConfig.users)
      .then((response) => {
        dispatch(usersReqSuccess(response.data));
      })
      .catch((error) => {
        dispatch(usersReqErr(error));
      });
  };
}
