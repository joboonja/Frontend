/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from '@material-ui/icons/Error';
import './styles.scss';

function PageError({ errorMsg, fontSize }) {
  return (
    <div
      className="pageErrorContainer"
    >
      {errorMsg}
      <ErrorIcon color="primary" style={{ fontSize }}>
        Outlined
      </ErrorIcon>
    </div>
  );
}

PageError.propTypes = {
  errorMsg: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

PageError.defaultProps = {
  fontSize: '100',
};

export default PageError;
