import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function ProjectSummaryTime({
  days, hours, minutes, ended,
}) {
  const remainedTime = (
    <span className="projectSummaryTime">
      {`زمان باقی‌مانده: ${days}:${hours}:${minutes}`}
    </span>
  );
  const endedTime = (
    <span className="projectSummaryTimeEnded">
      مهلت تمام شده
    </span>
  );
  return (
    <div>
      {ended
        ? endedTime
        : remainedTime}
    </div>
  );
}

ProjectSummaryTime.propTypes = {
  days: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  ended: PropTypes.bool,
};
ProjectSummaryTime.defaultProps = {
  ended: false,
};

export default ProjectSummaryTime;
