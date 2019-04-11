/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectSummaryTime from './components/ProjectSummaryTime';
import convertEnglishNumbersToPersian from '../../services/convertEnglishNumbersToPersian';

function ProjectTime({ time, showStyle }) {
  const days = Math.floor((time - Date.now()) / (36e5 * 24));
  const hours = Math.floor(((time - days * (36e5 * 24)) - Date.now()) / (36e5));
  const minutes = Math.floor(
    (
      (time - days * (36e5 * 24) - hours * 36e5) - Date.now()
    ) / (1000 * 60),
  );
  const ended = days < 0 || hours < 0 || minutes < 0;
  const isProjectCard = showStyle === 'projectCard';
  const daysStr = convertEnglishNumbersToPersian(days.toString());
  const hoursStr = convertEnglishNumbersToPersian(hours.toString());
  const minutesStr = convertEnglishNumbersToPersian(minutes.toString());
  return (
    <div>
      {
        <ProjectSummaryTime
          days={daysStr}
          hours={hoursStr}
          minutes={minutesStr}
          ended={ended}
          isProjectCard={isProjectCard}
        />
     }
    </div>
  );
}

ProjectTime.propTypes = {
  time: PropTypes.number.isRequired,
  showStyle: PropTypes.oneOf(['projectSummary']).isRequired,
};

export default ProjectTime;
