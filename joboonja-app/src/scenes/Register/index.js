import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AddButton from '../../components/Buttons/AddButton';
import SampleInput from '../../components/Inputs/SimpleInput';
import SlideShow from './componenets/SlideShow';
import RegisterTitle from './componenets/RegisterTitle';

class Register extends React.PureComponent {
  render() {
    const {
      username, password, onPasswordChange, onUserChange, valid, userError, passwordError,
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
                    <div className="col-6">
                      <input type="file" className="custom-file-input" id="customFile" />
                      <label className="custom-file-label ">
                        <p className="file-selector-label">
                          آپلود فایل تصویر پروفایل
                        </p>
                      </label>
                    </div>

                  </div>


                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label>عنوان شغل</label>
                    <input type="text" className="form-control" placeholder="عنوان شغل" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>رمز عبور</label>
                    <input type="password" className="form-control" placeholder="رمز عبور" />
                  </div>
                  <div className="col-md-3 mb-3">
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
                  <div className="col-lg-5 col-md-8">
                    <div className="form-group">
                      <div className="form-check">
                        <input type="checkbox" />
                        <label className="form-check-label">
                          تمامی شرایط و قوانین جاب‌اونجا را می‌پذیرم.
                        </label>
                      </div>
                    </div>
                  </div>
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

export default Register;
