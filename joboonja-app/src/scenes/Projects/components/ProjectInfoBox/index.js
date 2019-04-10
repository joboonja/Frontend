import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './components/ProjectCard';

function ProjectInfoShow(
) {
  return (
    <div>
      <ProjectCard />
    </div>
  );
}

ProjectInfoShow.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // jobTitle: PropTypes.string.isRequired,
  // imgUrl: PropTypes.string.isRequired,
  // bio: PropTypes.string.isRequired,
};

export default ProjectInfoShow;
