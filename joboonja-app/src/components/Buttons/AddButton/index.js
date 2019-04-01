import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function AddButton({ children, onClick }) {
  return (
    <button className="add-skill-button" type="button" onClick={onClick}>
      {children}
    </button>
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
