import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { usersReqSent, usersReqErr, usersReqSuccess } = createActions(
  'USERS_REQ_SENT',
  'USERS_REQ_ERR',
  'USERS_REQ_SUCCESS',
);


export function requestForUsers(search = '') {
  return (dispatch) => {
    dispatch(usersReqSent(search));
    Axios.get(urlsConfig.users(search))
      .then((response) => {
        dispatch(usersReqSuccess(response.data));
      })
      .catch((error) => {
        dispatch(usersReqErr(error));
      });
  };
}
