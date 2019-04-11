// import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Card from '../../components/Card';
// import './styles.scss';
// import AddButton from '../../components/Buttons/AddButton';
// import SampleInput from '../../components/Inputs/SimpleInput';
//
// class Register extends React.PureComponent {
//   render() {
//     const {
//       username, password, onPasswordChange, onUserChange, valid, userError, passwordError,
//     } = this.props;
//     return (
//       <div className="main">
//         {/* <SlideShow /> */}
//         <div className="loginContainer">
//           <Card hoverable className="loginCard">
//             <div className="loginTitle">
//               <h4>ورود به جاب‌اونجا</h4>
//             </div>
//             <form noValidate autoComplete="off" className="loginForm">
//               <SampleInput className="loginInput" placeholder="نام کاربری" value={username} onChange={onUserChange} error={userError} />
//               <SampleInput className="loginInput" placeholder="رمز عبور" type="password" error={passwordError} value={password} onChange={onPasswordChange} />
//             </form>
//
//             <div className="row loginButtonContainer">
//               <AddButton width="100px" disabled={!valid}>ورود</AddButton>
//             </div>
//
//             <div className="loginFooter">
//               <NavLink className="loginLink"> رمز عبور را فراموش کرده‌ام.</NavLink>
//               <NavLink className="loginLink" to="/signup"> ثبت‌نام</NavLink>
//             </div>
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }
//
// Register.propTypes = {
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   onUserChange: PropTypes.func.isRequired,
//   onPasswordChange: PropTypes.func.isRequired,
//   userError: PropTypes.string.isRequired,
//   passwordError: PropTypes.string.isRequired,
//   valid: PropTypes.bool.isRequired,
// };
//
// const mapStateToProps = store => ({
//   username: store.Register.username,
//   password: store.Register.password,
//   userError: store.Register.userError,
//   passwordError: store.Register.passwordError,
//   valid: store.Register.valid,
// });
//
// const mapDispatchToProps = dispatch => ({
//   onUserChange: (e) => { dispatch(usernameChanged(e.target.value)); },
//   onPasswordChange: (e) => { dispatch(passwordChanged(e.target.value)); },
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
