import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import './styles.scss';

export function ToastMsg({ msg, reason }) {
  return (
    <div>
      {msg}
      { reason
        ? (
          <div>
          دلیل:
            {' '}
            {reason}
          </div>
        )
        : '' }
    </div>
  );
}
ToastMsg.propTypes = {
  msg: PropTypes.bool.isRequired,
  reason: PropTypes.string,
};
ToastMsg.defaultProps = {
  reason: '',
};

function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      bodyClassName="toastClassFont"
      rtl
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  );
}

export default Toast;
