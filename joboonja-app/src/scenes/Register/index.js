/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddButton from '../../components/Buttons/AddButton';
import SlideShow from './componenets/SlideShow';
import RegisterTitle from './componenets/RegisterTitle';
import RegisterCheckBox from './componenets/RegisterCheckBox';
import
{
  regUsernameChanged, regPasswordChanged, regRepeatedChanged, regFirstNameChanged,
  regLastNameChanged, regImgLinkChanged, regJobChanged, regCheckBoxChanged, addUser,
  regDescriptionChanged, regReset,
} from './services/actions';
import RegisterField from './componenets/RegisterField';
import NotEmptyError from './componenets/NotEmptyError';

class Register extends React.PureComponent {
  render() {
    const {
      username, password, repeatedPassword, firstName, lastName, imgLink, job,
      onUsernameChange, onPasswordChange, onRepeatedChange, onFirstNameChange, onLastNameChange,
      onCheckBoxChange, onImgLinkChange, onJobChange, valid, userError, passwordError, start,
      repeatedError, notEmptyValid, success, loading, onButtonClick, onBioChange, bio, registerReset,
    } = this.props;
    if (success) {
      registerReset();
      return <Redirect push to="/" />;
    }
    return (
      <body className="register-body">
        <SlideShow />
        <div className="main container">
          <div className="register-container">
            <div className="register-card-container container">
              <RegisterTitle />
              <form className="needs-validation" noValidate>
                {notEmptyValid ? <div /> : <NotEmptyError />}
                <div className="form-row">
                  <RegisterField colClassName="col-md-4 mb-3" labelText="نام*" placeholder="نام" value={firstName} onChange={onFirstNameChange} />
                  <RegisterField colClassName="col-md-4 mb-3" labelText="نام خانوادگی*" placeholder="نام خانوادگی" value={lastName} onChange={onLastNameChange} />
                  <RegisterField colClassName="col-md-4 mb-3" labelText="نام‌کاربری*" placeholder="نام‌کاربری" value={username.toLowerCase()} onChange={onUsernameChange} error={start ? '' : userError} isUsername />
                </div>
                <div className="custom-file file-selector form-row">
                  <div className="form-row">
                    <RegisterField colClassName="col-12" labelText="تصویر پروفایل" placeholder="لینک فایل تصویر پروفایل" value={imgLink} onChange={onImgLinkChange} canBeEmpty />
                  </div>
                  <div className="form-row" />
                </div>
                <div className="form-row">
                  <RegisterField colClassName="col-md-4 mb-3" labelText="عنوان شغل*" placeholder="عنوان شغل" value={job} onChange={onJobChange} />
                  <RegisterField colClassName="col-md-4 mb-3" labelText="رمز عبور*" placeholder="رمز عبور" value={password} onChange={onPasswordChange} error={start ? '' : passwordError} type="password" />
                  <RegisterField colClassName="col-md-4 mb-3" labelText="تکرار رمز عبور*" placeholder="تکرار رمز عبور" value={repeatedPassword} onChange={onRepeatedChange} error={start? '' : repeatedError} type="password" />
                </div>
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text username-badge">درباره‌ی خود بنویسید</span>
                  </div>
                  <textarea className="form-control register-text-area" onChange={onBioChange}/>
                </div>
                <div className="row register-final-row">
                  <RegisterCheckBox onClick={onCheckBoxChange} />
                  <div className="col-lg-7 col-md-4">
                    <AddButton disabled={!valid} loading={loading} onClick={()=>onButtonClick(username, firstName, lastName, password, job, imgLink, bio)}>ثبت‌نام</AddButton>
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
  bio: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onRepeatedChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onImgLinkChange: PropTypes.func.isRequired,
  onJobChange: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  notEmptyValid: PropTypes.bool.isRequired,
  userError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  repeatedError: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  regReset: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  username: store.Register.username,
  password: store.Register.password,
  repeatedPassword: store.Register.repeated,
  firstName: store.Register.firstName,
  lastName: store.Register.lastName,
  imgLink: store.Register.imgLink,
  job: store.Register.job,
  bio: store.Register.description,
  userError: store.Register.userError,
  passwordError: store.Register.passwordError,
  repeatedError: store.Register.repeatedError,
  notEmptyValid: store.Register.notEmptyValid,
  valid: store.Register.valid,
  success: store.Register.success,
  loading: store.Register.loading,
  start: store.Register.start,
});

const mapDispatchToProps = dispatch => ({
  onUsernameChange: (e) => { dispatch(regUsernameChanged(e.target.value)); },
  onPasswordChange: (e) => { dispatch(regPasswordChanged(e.target.value)); },
  onRepeatedChange: (e) => { dispatch(regRepeatedChanged(e.target.value)); },
  onFirstNameChange: (e) => { dispatch(regFirstNameChanged(e.target.value)); },
  onLastNameChange: (e) => { dispatch(regLastNameChanged(e.target.value)); },
  onImgLinkChange: (e) => { dispatch(regImgLinkChanged(e.target.value)); },
  onJobChange: (e) => { dispatch(regJobChanged(e.target.value)); },
  onBioChange: (e) => { dispatch(regDescriptionChanged(e.target.value)); },
  onCheckBoxChange: (e) => { dispatch(regCheckBoxChanged(e.target.value)); },
  onButtonClick: (username, firstName, lastName, password, jobTitle, profilePictureUrl, bio) => { dispatch(addUser(username, firstName, lastName, password, jobTitle, profilePictureUrl, bio)); },
  registerReset: () => {dispatch(regReset())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
