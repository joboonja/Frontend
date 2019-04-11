/* eslint-disable no-nested-ternary */
import React from 'react';
import './styles.scss';
import '../styles.scss';
import PropTypes from 'prop-types';

function ProjectIconText({ text, type }) {
  return (
    <div className={type === 'deadline'
      ? 'col-auto projectInfoText' : type === 'money'
        ? 'col-auto projectInfoText money' : type === 'deadlineReached'
          ? 'col-auto projectInfoText deadlinePassed' : 'col-auto projectInfoTitle'}
    >
      {text}
    </div>
  );
}

ProjectIconText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProjectIconText;
