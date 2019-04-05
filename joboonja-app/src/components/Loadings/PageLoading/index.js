/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { withTheme } from '@material-ui/core';
import './styles.scss';

function PageLoading({ theme, loading, size }) {
  return (
    <div
      className="containerLoading"
    >
      <ClipLoader
        sizeUnit="px"
        size={size}
        color={theme.palette.primary.main}
        loading={loading}
      />
    </div>
  );
}

PageLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
  theme: PropTypes.object.isRequired,
};

PageLoading.defaultProps = {
  size: 50,
};

export default withTheme()(PageLoading);
