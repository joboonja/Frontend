import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import AddButton from '../../components/Buttons/AddButton';
import SampleInput from '../../components/Inputs/SimpleInput';
import SlideShow from './componenets/SlideShow';
import RegisterTitle from './componenets/RegisterTitle';
import RegisterCheckBox from './componenets/RegisterCheckBox';
import
{
  regUsernameChanged, regPasswordChanged, regRepeatedChanged, regFirstNameChanged,
  regLastNameChanged, regImgLinkChanged, regJobChanged, regCheckBoxChanged,
} from './services/actions';

class Register extends React.PureComponent {
  render() {
    const {
      username, password, repeatedPassword, firstName, lastName, imgLink, job,
      onUsernameChange, onPasswordChange, onRepeatedChange, onFirstNameChange, onLastNameChange,
      onCheckBoxChange, onImgLinkChange, onJobChange, valid, userError, passwordError, repeatedError,
      notEmptyError,
    } = this.props;
    return (
      <body className="register-body">
        <SlideShow />
        <div className="main container">
          <div className="register-container">
            <div className="register-card-container container">
              <RegisterTitle />
              <form className="needs-validation" noValidate>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label>نام</label>
                    <input type="text" className="form-control" id="name" placeholder="نام" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>نام خانوادگی</label>
                    <input type="text" className="form-control" id="family-name" placeholder="نام خانوادگی" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>نام‌کاربری</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text username-badge">@</span>
                      </div>
                      <input type="text" className="form-control" id="username" placeholder="نام کاربری" />
                    </div>
                  </div>
                </div>
                <div className="custom-file file-selector form-row">
                  <div className=" form-row">
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder="لینک فایل تصویر پروفایل" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label>عنوان شغل</label>
                    <input type="text" className="form-control" placeholder="عنوان شغل" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>رمز عبور</label>
                    <input type="password" className="form-control" placeholder="رمز عبور" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label> تکرار رمز عبور</label>
                    <input
                      type="password"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="تکرار رمز عبور"
                    />
                  </div>
                </div>
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text username-badge">درباره‌ی خود بنویسید</span>
                  </div>
                  <textarea className="form-control register-text-area" />
                </div>
                <div className="row register-final-row">
                  <RegisterCheckBox />
                  <div className="col-lg-7 col-md-4">
                    <button className="register-btn btn btn-primary" type="submit">ثبت‌نام</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatedPassword: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onRepeatedChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onImgLinkChange: PropTypes.func.isRequired,
  onJobChange: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  userError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  repeatedError: PropTypes.string.isRequired,
  notEmptyError: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  username: store.Register.username,
  password: store.Register.password,
  repeatedPassword: store.Register.repeated,
  firstName: store.Register.firstName,
  lastName: store.Register.lastName,
  imgLink: store.Register.imgLink,
  job: store.Register.job,
  userError: store.Register.userError,
  passwordError: store.Register.passwordError,
  repeatedError: store.Register.repeatedError,
  notEmptyError: store.Register.notEmptyError,
  valid: store.Register.valid,
});

const mapDispatchToProps = dispatch => ({
  onUsernameChange: (e) => { dispatch(regUsernameChanged(e.target.value)); },
  onPasswordChange: (e) => { dispatch(regPasswordChanged(e.target.value)); },
  onRepeatedChange: (e) => { dispatch(regRepeatedChanged(e.target.value)); },
  onFirstNameChange: (e) => { dispatch(regFirstNameChanged(e.target.value)); },
  onLastNameChange: (e) => { dispatch(regLastNameChanged(e.target.value)); },
  onImgLinkChange: (e) => { dispatch(regImgLinkChanged(e.target.value)); },
  onJobChange: (e) => { dispatch(regJobChanged(e.target.value)); },
  onCheckBoxChange: (e) => { dispatch(regCheckBoxChanged(e.target.value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
