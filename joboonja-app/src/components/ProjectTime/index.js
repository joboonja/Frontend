import React from 'react';
import PropTypes from 'prop-types';
import ProjectSummaryTime from './components/ProjectSummaryTime';

function ProjectTime({ time, showStyle }) {
  const days = Math.floor((time - Date.now()) / (36e5 * 24));
  const hours = Math.floor(((time - days * (36e5 * 24)) - Date.now()) / (36e5));
  const minutes = Math.floor(
    (
      (time - days * (36e5 * 24) - hours * 36e5) - Date.now()
    ) / (1000 * 60),
  );
  return (
    <div>
      { showStyle === 'projectSummary'
        ? <ProjectSummaryTime days={days} hours={hours} minutes={minutes} />
        : <div /> }

    </div>
  );
}

ProjectTime.propTypes = {
  time: PropTypes.number.isRequired,
  showStyle: PropTypes.oneOf(['projectSummary']).isRequired,
};

export default ProjectTime;
