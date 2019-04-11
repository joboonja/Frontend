/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, withTheme } from '@material-ui/core';
import './styles.scss';
import { ClipLoader } from 'react-spinners';


function AddButton({
  children, onClick, loading, theme, color, width, disabled
}) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="add-skill-button"
        type="button"
        onClick={onClick}
        disabled={loading || disabled}
        style={{ width: width || '100%', backgroundColor: color }}
      >

        {children}
      </Button>

      {loading && (
      <div className="loadingContainer">
        <ClipLoader loading={loading} size="28" color={theme.palette.primary.main} />
      </div>
      )
      }
    </div>
  );
}
AddButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

AddButton.defaultProps = {
  children: '',
  onClick: () => {
  },
  loading: false,
  color: null,
  width: '',
  disabled: false,
};

export default withTheme()(AddButton);
