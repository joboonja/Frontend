import { handleActions } from 'redux-actions';
import { toast } from 'react-toastify';
import React from 'react';
import {
  regUsernameChanged, regPasswordChanged, regRepeatedChanged, regReset,
  regFirstNameChanged, regLastNameChanged, regImgLinkChanged, regJobChanged,
  regDescriptionChanged, regCheckBoxChanged, regReqSent, regReqSuccess, regReqError,
} from './actions';
import { errors, successes } from '../../../services/toast/config';
import { ToastMsg } from '../../../components/Toast';
import { tokenConfig } from '../../../services/axios/config';

const defaultState = {
  username: '',
  password: '',
  repeatedPassword: '',
  firstName: '',
  lastName: '',
  imgLink: '',
  job: '',
  description: '',
  valid: false,
  firstNameNotEmptyValid: false,
  lastNameNotEmptyValid: false,
  jobNotEmptyValid: false,
  notEmptyValid: false,
  userValid: false,
  passwordValid: false,
  repeatedValid: false,
  checkBoxValid: false,
  passwordError: '',
  userError: '',
  repeatedError: '',
  notEmptyError: errors.FIELD_EMPTY,
  success: false,
  loading: false,
  start: true,
};

const Register = handleActions({
  [regFirstNameChanged]: (state, { payload: firstName }) => {
    const firstNameNotEmptyValid = firstName !== '';
    const fullValid = firstNameNotEmptyValid
        && state.lastNameNotEmptyValid
        && state.jobNotEmptyValid;
    return ({
      ...state,
      start: false,
      firstName,
      firstNameNotEmptyValid,
      notEmptyValid: fullValid,
      valid: state.passwordValid && fullValid
          && state.repeatedValid && state.userValid && state.checkBoxValid,
    });
  },
  [regLastNameChanged]: (state, { payload: lastName }) => {
    const lastNameNotEmptyValid = lastName !== '';
    const fullValid = lastNameNotEmptyValid
            && state.firstNameNotEmptyValid
            && state.jobNotEmptyValid;
    return ({
      ...state,
      start: false,
      lastName,
      lastNameNotEmptyValid,
      notEmptyValid: fullValid,
      valid: state.passwordValid && fullValid
          && state.repeatedValid && state.userValid && state.checkBoxValid,
    });
  },
  [regJobChanged]: (state, { payload: job }) => {
    const jobNotEmptyValid = job !== '';
    const fullValid = jobNotEmptyValid
            && state.firstNameNotEmptyValid
            && state.lastNameNotEmptyValid;
    return ({
      ...state,
      start: false,
      job,
      jobNotEmptyValid,
      notEmptyValid: fullValid,
      valid: state.passwordValid && fullValid && state.repeatedValid
          && state.userValid && state.checkBoxValid,
    });
  },
  [regImgLinkChanged]: (state, { payload: imgLink }) => ({
    ...state,
    start: false,
    imgLink,
    valid: state.passwordValid && state.repeatedValid
        && state.userValid && state.checkBoxValid && state.notEmptyValid,
  }),
  [regImgLinkChanged]: (state, { payload: imgLink }) => ({
    ...state,
    start: false,
    imgLink,
  }),
  [regUsernameChanged]: (state, { payload: username }) => {
    const userValid = username !== '';
    const userError = userValid ? '' : errors.USER_EMPTY;
    return ({
      ...state,
      start: false,
      username,
      userValid,
      valid: state.passwordValid && userValid && state.checkBoxValid && state.notEmptyValid,
      userError,
    });
  },
  [regPasswordChanged]: (state, { payload: password }) => {
    let passwordValid = true;
    let repeatedValid = true;
    let repeatedError = '';
    let passwordError = '';
    let notEmpty = true;
    if (password === '') {
      notEmpty = false;
      passwordValid = false;
      passwordError = errors.PASSWORD_EMPTY;
    } else if (password.length < 6) {
      passwordValid = false;
      passwordError = errors.PASSWORD_SIX_CHAR;
    }
    if (password !== state.repeated) {
      repeatedValid = false;
      repeatedError = errors.PASS_MUST_MATCH;
    }
    return ({
      ...state,
      start: false,
      password,
      passwordError,
      passwordValid,
      notEmptyValid: notEmpty,
      repeatedValid,
      repeatedError,
      valid: passwordValid && state.userValid && state.checkBoxValid
          && notEmpty && repeatedValid,
    });
  },
  [regRepeatedChanged]: (state, { payload: repeated }) => {
    let repeatedValid = true;
    let repeatedError = '';
    let notEmpty = true;
    if (repeated !== state.password || repeated === '') {
      if (repeated === '') notEmpty = false;
      repeatedValid = false;
      repeatedError = errors.PASS_MUST_MATCH;
    }
    return ({
      ...state,
      start: false,
      repeated,
      repeatedError,
      notEmptyValid: notEmpty,
      repeatedValid,
      valid: repeatedValid && state.passwordValid
          && state.userValid && state.checkBoxValid && notEmpty,
    });
  },
  [regDescriptionChanged]: (state, { payload: description }) => ({
    ...state,
    description,
  }),
  [regCheckBoxChanged]: (state) => {
    const checkValid = !state.checkBoxValid;
    return ({
      ...state,
      start: false,
      checkBoxValid: checkValid,
      valid:
          (state.passwordValid && state.notEmptyValid
              && state.repeatedValid && state.userValid && checkValid),
    });
  },
  [regReqSent]: state => ({
    ...state,
    start: false,
    loading: true,
  }),
  [regReqSuccess]: (state, { payload: { token } }) => {
    toast.success(<ToastMsg msg={successes.ADD_USER} />);
    localStorage.setItem(tokenConfig.localStorageKey, token);
    localStorage.setItem('username', state.username);
    return ({
      ...state,
      start: false,
      success: true,
      loading: false,
    });
  },
  [regReqError]: (state, { payload: error }) => {
    toast.error(<ToastMsg
      msg={errors.ADD_USER}
      reason={error.response.status === 403 ? errors.USER_EXISTS : error.toString()}
    />);
    let userExists = '';
    if (error && error.response.status === 403) {
      userExists = errors.USER_EXISTS;
    }
    return ({
      ...state,
      start: false,
      userError: userExists,
      success: false,
      loading: false,
    });
  },
  [regReset]: () => (Object.assign({}, defaultState)),
},
defaultState);

export default Register;
