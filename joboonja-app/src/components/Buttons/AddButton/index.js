import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './styles.scss';


export default function AddButton({ children, onClick }) {
  return (
    <Button variant="contained" color="primary" className="add-skill-button" type="button" onClick={onClick}>
      {children}
    </Button>
  );
}
AddButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

AddButton.defaultProps = {
  children: '',
  onClick: () => {},
};
