import { handleActions } from 'redux-actions';
import {
  regUsernameChanged, regPasswordChanged, regRepeatedChanged,
  regFirstNameChanged, regLastNameChanged, regImgLinkChanged, regJobChanged,
  regDescriptionChanged, regCheckBoxChanged,
} from './actions';
import { errors } from '../../../services/toast/config';

const Register = handleActions({
  [regFirstNameChanged]: (state, { payload: firstName }) => {
    const notEmptyValid = firstName !== '';
    const notEmptyError = notEmptyValid ? '' : errors.FIELD_EMPTY;
    return ({
      ...state,
      firstName,
      notEmptyValid,
      valid: state.passwordValid && notEmptyValid && state.repeatedValid && state.userValid,
      notEmptyError,
    });
  },
  [regLastNameChanged]: (state, { payload: lastName }) => {
    const notEmptyValid = lastName !== '';
    const notEmptyError = notEmptyValid ? '' : errors.FIELD_EMPTY;
    return ({
      ...state,
      lastName,
      notEmptyValid,
      valid: state.passwordValid && notEmptyValid && state.repeatedValid && state.userValid,
      notEmptyError,
    });
  },
  [regJobChanged]: (state, { payload: job }) => {
    const notEmptyValid = job !== '';
    const notEmptyError = notEmptyValid ? '' : errors.FIELD_EMPTY;
    return ({
      ...state,
      job,
      notEmptyValid,
      valid: state.passwordValid && notEmptyValid && state.repeatedValid && state.userValid,
      notEmptyError,
    });
  },
  [regImgLinkChanged]: (state, { payload: imgLink }) => {
    const notEmptyValid = imgLink !== '';
    const notEmptyError = notEmptyValid ? '' : errors.FIELD_EMPTY;
    return ({
      ...state,
      imgLink,
      notEmptyValid,
      valid: state.passwordValid && notEmptyValid && state.repeatedValid && state.userValid,
      notEmptyError,
    });
  },
  [regImgLinkChanged]: (state, { payload: imgLink }) => {
    const notEmptyValid = imgLink !== '';
    const notEmptyError = notEmptyValid ? '' : errors.FIELD_EMPTY;
    return ({
      ...state,
      imgLink,
      notEmptyValid,
      valid: state.passwordValid && notEmptyValid && state.repeatedValid && state.userValid,
      notEmptyError,
    });
  },
  [regUsernameChanged]: (state, { payload: username }) => {
    const userValid = username !== '';
    const userError = userValid ? '' : errors.USER_EMPTY;
    return ({
      ...state, username, userValid, valid: state.passwordValid && userValid, userError,
    });
  },
  [regPasswordChanged]: (state, { payload: password }) => {
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
      ...state, password, passwordError, passwordValid, valid: passwordValid && state.userValid,
    });
  },
  [regRepeatedChanged]: (state, { payload: repeated }) => {
    let repeatedValid = true;
    let repeatedError = '';
    if (repeated !== state.password || repeated === '') {
      repeatedValid = false;
      repeatedError = errors.PASS_MUST_MATCH;
    }
    return ({
      ...state,
      repeated,
      repeatedError,
      repeatedValid,
      valid: repeatedValid && state.passwordValid && state.userValid,
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
      checkBoxValid: checkValid,
      valid:
          (state.passwordValid && state.notEmptyValid
              && state.repeatedValid && state.userValid && checkValid),
    });
  },
},
{
  username: '',
  password: '',
  repeatedPassword: '',
  firstName: '',
  lastName: '',
  imgLink: '',
  job: '',
  description: '',
  valid: false,
  notEmptyValid: false,
  userValid: false,
  passwordValid: false,
  repeatedValid: false,
  checkBoxValid: false,
  passwordError: errors.PASSWORD_EMPTY,
  userError: errors.USER_EMPTY,
  repeatedError: errors.PASS_MUST_MATCH,
  notEmptyError: errors.FIELD_EMPTY,
});

export default Register;
