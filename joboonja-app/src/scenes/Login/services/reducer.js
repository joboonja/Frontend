import { handleActions } from 'redux-actions';
import { toast } from 'react-toastify';
import React from 'react';
import { usernameChanged, passwordChanged, loginCleanData } from './actions';
import { loginReqSent, loginReqError, loginReqSuccess } from './actions';
import { errors } from '../../../services/toast/config';
import { tokenConfig } from '../../../services/axios/config';
import { ToastMsg } from '../../../components/Toast';

const defaultState = {
  username: '',
  password: '',
  valid: false,
  userValid: false,
  passwordValid: false,
  passwordError: '',
  userError: '',
  loginError: '',
  loading: false,
  success: false,
  token: '',
  error: '',
};
const Login = handleActions({
  [loginCleanData]: () => Object.assign({}, defaultState),
  [usernameChanged]: (state, { payload: username }) => {
    const userValid = username !== '';
    const userError = userValid ? '' : errors.USER_EMPTY;
    return ({
      ...state, username, userValid, valid: state.passwordValid && userValid, userError, loginError: '',
    });
  },
  [passwordChanged]: (state, { payload: password }) => {
    let passwordValid = true;
    let passwordError = '';
    if (password === '') {
      passwordValid = false;
      passwordError = errors.PASSWORD_EMPTY;
    } else if (password.length < 6) {
      passwordValid = false;
      passwordError = errors.PASSWORD_SIX_CHAR;
    }
    return ({
      ...state, password, passwordError, passwordValid, valid: passwordValid && state.userValid, loginError: '',
    });
  },
  [loginReqSent]: state => ({
    ...state, loading: true, token: '', error: '',
  }),
  [loginReqSuccess]: (state, { payload: { token } }) => {
    localStorage.setItem(tokenConfig.localStorageKey, token);
    return {
      ...state, token, loading: false, success: true,
    };
  },
  [loginReqError]: (state, { payload: error }) => {
    if (error && error.response.status === 403) {
      return {
        ...state, error, loginError: errors.LOGIN_FAILURE, loading: false,
      };
    }
    toast.error(<ToastMsg
      msg={errors.CAN_NOT_LOGIN}
      reason={error.toString()}
    />);
    return { ...state, error, loading: false };
  },
},
defaultState);

export default Login;
