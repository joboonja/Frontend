import React from 'react';
import './styles.scss';
import '../styles.scss';
import PropTypes from 'prop-types';

function ProjectIconText({ text, type }) {
  return (
    <div className={type === 'deadline'
      ? 'col-auto projectInfoText' : type === 'money'
        ? 'col-auto projectInfoText money' : 'col-auto projectInfoText'}
    >
      {text}
    </div>
  );
}

ProjectIconText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectIconText;
