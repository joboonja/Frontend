import { handleActions } from 'redux-actions';
import { usernameChanged, passwordChanged } from './actions';
import { errors } from '../../../services/toast/config';

const Login = handleActions({
  [usernameChanged]: (state, { payload: username }) => {
    const userValid = username !== '';
    const userError = userValid ? '' : errors.USER_EMPTY;
    return ({
      ...state, username, userValid, valid: state.passwordValid && userValid, userError,
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
      ...state, password, passwordError, passwordValid, valid: passwordValid && state.userValid,
    });
  },
},
{
  username: '',
  password: '',
  valid: false,
  userValid: false,
  passwordValid: false,
  passwordError: errors.PASSWORD_EMPTY,
  userError: errors.USER_EMPTY,
});

export default Login;
