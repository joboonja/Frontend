import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './styles.scss';
import AddButton from '../../components/Buttons/AddButton';
import SampleInput from '../../components/Inputs/SimpleInput';

import {
  usernameChanged, passwordChanged, login, loginCleanData,
} from './services/actions';

class Login extends React.PureComponent {
  componentDidMount() {
    const { setToDefaultState } = this.props;
    setToDefaultState();
  }

  render() {
    const {
      username,
      password,
      onPasswordChange,
      onUserChange,
      valid,
      userError,
      passwordError,
      loginError,
      loading,
      loginUser,
      success,
      setToDefaultState,
    } = this.props;
    if (success) {
      setToDefaultState();
      return <Redirect push to="/" />;
    }
    return (
      <div className="main">
        {/* <SlideShow /> */}
        <div className="loginContainer">
          <Card hoverable className="loginCard">
            <div className="loginTitle">
              <h4>ورود به جاب‌اونجا</h4>
            </div>
            <form noValidate autoComplete="off" className="loginForm">
              <SampleInput className="loginInput" placeholder="نام کاربری" value={username} onChange={onUserChange} error={userError} />
              <SampleInput className="loginInput" placeholder="رمز عبور" type="password" error={passwordError} value={password} onChange={onPasswordChange} />
            </form>

            <div className="row loginButtonContainer">
              <AddButton width="100px" disabled={!valid} onClick={() => { loginUser(username, password); }} loading={loading}>
                ورود
              </AddButton>
            </div>
            <div className="loginError">{loginError}</div>

            <div className="loginFooter">
              <NavLink className="loginLink"> رمز عبور را فراموش کرده‌ام.</NavLink>
              <NavLink className="loginLink" to="/signup"> ثبت‌نام</NavLink>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  userError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  setToDefaultState: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  username: store.Login.username,
  password: store.Login.password,
  userError: store.Login.userError,
  passwordError: store.Login.passwordError,
  valid: store.Login.valid,
  loginError: store.Login.loginError,
  loading: store.Login.loading,
  success: store.Login.success,
});

const mapDispatchToProps = dispatch => ({
  onUserChange: (e) => { dispatch(usernameChanged(e.target.value)); },
  onPasswordChange: (e) => { dispatch(passwordChanged(e.target.value)); },
  loginUser: (username, password) => { dispatch(login(username, password)); },
  setToDefaultState: () => { dispatch(loginCleanData()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
