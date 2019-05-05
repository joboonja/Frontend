/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import { withTheme } from '@material-ui/core';
import './styles.scss';

function ListLoading({ theme, loading, size }) {
  return (
    <div
      className="listLoading"
    >
      <PropagateLoader
        sizeUnit="px"
        size={size}
        color={theme.palette.primary.main}
        loading={loading}
      />
    </div>
  );
}

ListLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
  theme: PropTypes.object.isRequired,
};

ListLoading.defaultProps = {
  size: 50,
};

export default withTheme()(ListLoading);
