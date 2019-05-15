import { createActions } from 'redux-actions';
import Axios from '../../../services/axios';
import { urlsConfig } from '../../../services/axios/config';

export const { usernameChanged, passwordChanged } = createActions(
  'USERNAME_CHANGED',
  'PASSWORD_CHANGED',
);

export const { loginReqSent, loginReqSuccess, loginReqError } = createActions(
  'LOGIN_REQ_SENT',
  'LOGIN_REQ_SUCCESS',
  'LOGIN_REQ_ERROR',
);

export function login(username, password) {
  return (dispatch) => {
    dispatch(loginReqSent());
    Axios.post(urlsConfig.login, {
      username, password,
    })
      .then((response) => {
        dispatch(loginReqSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginReqError(error));
      });
  };
}
