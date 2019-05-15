import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './styles.scss';
import AddButton from '../../components/Buttons/AddButton';
import SampleInput from '../../components/Inputs/SimpleInput';
import { usernameChanged, passwordChanged, login } from './services/actions';

class Login extends React.PureComponent {
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
      login,
    } = this.props;
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
              <AddButton width="100px" disabled={!valid} onClick={() => { login(username, password); }} loading={loading}>
                ورود
              </AddButton>
              {loginError}
            </div>

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
};

const mapStateToProps = store => ({
  username: store.Login.username,
  password: store.Login.password,
  userError: store.Login.userError,
  passwordError: store.Login.passwordError,
  valid: store.Login.valid,
  loginError: store.Login.loginError,
  loading: store.Login.loading,
});

const mapDispatchToProps = dispatch => ({
  onUserChange: (e) => { dispatch(usernameChanged(e.target.value)); },
  onPasswordChange: (e) => { dispatch(passwordChanged(e.target.value)); },
  login: (username, password) => { dispatch(login(username, password)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
