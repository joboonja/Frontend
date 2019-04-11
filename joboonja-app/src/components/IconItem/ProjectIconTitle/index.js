/* eslint-disable no-nested-ternary */
import React from 'react';
import '../styles.scss';
import './styles.scss';
import PropTypes from 'prop-types';

function ProjectIconTitle({ text, type }) {
  return (
    <div className={type === 'deadline'
      ? 'col-auto projectInfoTitle' : type === 'money'
        ? 'col-auto projectInfoTitle money' : type === 'deadlineReached'
          ? 'col-auto projectInfoTitle deadlinePassed' : type === 'winner'
            ? 'col-auto projectInfoTitle winner' : 'col-auto projectInfoTitle'}
    >
      {text}
    </div>
  );
}

ProjectIconTitle.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProjectIconTitle;
