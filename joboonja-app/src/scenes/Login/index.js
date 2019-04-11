import React from 'react';
import SlideShow from '../../components/SlideShow';
import Card from '../../components/Card';
import './styles.scss';
import { TextField } from '@material-ui/core';
import AddButton from '../../components/Buttons/AddButton';

class Login extends React.PureComponent {
  render() {
    return (
      <div className="main">
        {/* <SlideShow /> */}
        <div className="loginContainer">
          <Card hoverable className="loginCard">
            <div className="loginTitle">
              <h4>ورود به جاب‌اونجا</h4>
            </div>
            <form noValidate autoComplete="off" className="loginForm">
              <input type="input" className="loginInput" placeholder="نام کاربری" />
              <input type="password" className="loginInput" placeholder="رمز عبور" />
            </form>

            <div className="row loginButtonContainer">
              <div className="col-md-4" />
              <div className="col-md-4">
                <AddButton>
                ورود
                </AddButton>
              </div>
              <div className="col-md-4" />
            </div>

          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
