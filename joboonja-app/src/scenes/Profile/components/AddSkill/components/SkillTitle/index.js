import React from 'react';
import PropTypes from 'prop-types';

const style = {
  fontWeight: 'bold',
};
export default function SkillTitle({ children }) {
  return (
    <h4 style={style}>
      {children}
    </h4>
  );
}

SkillTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
