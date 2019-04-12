import { handleActions } from 'redux-actions';
import {
  regUsernameChanged, regPasswordChanged, regRepeatedChanged,
  regFirstNameChanged, regLastNameChanged, regImgLinkChanged, regJobChanged,
  regDescriptionChanged, regCheckBoxChanged,
} from './actions';
import { errors } from '../../../services/toast/config';

const Register = handleActions({
  [regFirstNameChanged]: (state, { payload: firstName }) => {
    const firstNameNotEmptyValid = firstName !== '';
    const fullValid = firstNameNotEmptyValid
        && state.lastNameNotEmptyValid
        && state.jobNotEmptyValid;
    return ({
      ...state,
      firstName,
      firstNameNotEmptyValid,
      notEmptyValid: firstNameNotEmptyValid && state.lastNameNotEmptyValid
          && state.jobNotEmptyValid,
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
      lastName,
      lastNameNotEmptyValid,
      notEmptyValid: lastNameNotEmptyValid && state.firstNameNotEmptyValid
              && state.jobNotEmptyValid,
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
      job,
      jobNotEmptyValid,
      notEmptyValid: jobNotEmptyValid && state.firstNameNotEmptyValid
              && state.lastNameNotEmptyValid,
      valid: state.passwordValid && fullValid && state.repeatedValid && state.userValid && state.checkBoxValid,
    });
  },
  [regImgLinkChanged]: (state, { payload: imgLink }) => ({
    ...state,
    imgLink,
    valid: state.passwordValid && state.repeatedValid && state.userValid && state.checkBoxValid,
  }),
  [regImgLinkChanged]: (state, { payload: imgLink }) => ({
    ...state,
    imgLink,
  }),
  [regUsernameChanged]: (state, { payload: username }) => {
    const userValid = username !== '';
    const userError = userValid ? '' : errors.USER_EMPTY;
    return ({
      ...state,
      username,
      userValid,
      valid: state.passwordValid && userValid && state.checkBoxValid,
      userError,
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
      ...state,
      password,
      passwordError,
      passwordValid,
      valid: passwordValid && state.userValid && state.checkBoxValid,
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
      valid: repeatedValid && state.passwordValid && state.userValid && state.checkBoxValid,
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
  firstNameNotEmptyValid: false,
  lastNameNotEmptyValid: false,
  jobNotEmptyValid: false,
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
