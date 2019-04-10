import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function ProjectTitle({ title }) {
  return (
    <h3 className="projectTitle col-auto">
      {title}
    </h3>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectTitle;
