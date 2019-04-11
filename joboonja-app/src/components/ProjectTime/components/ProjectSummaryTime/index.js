/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import IconItem from '../../../IconItem';

function ProjectSummaryTime({
  days, hours, minutes, ended, isProjectCard,
}) {
  const remainedTime = (
    <span className="projectSummaryTime">
      {`زمان باقی‌مانده: ${days}:${hours}:${minutes}`}
    </span>
  );

  const projectCardDeadline = (
    <IconItem type="deadline" text={`${days} روز و ${hours} ساعت و ${minutes} دقیقه`} textTitle="زمان باقی‌مانده:" />
  );

  const projectCardDeadlinePassed = (
    <IconItem type="deadlineReached" text="مهلت تمام شده" textTitle="" />
  );

  const endedTime = (
    <span className="projectSummaryTimeEnded">
      مهلت تمام شده
    </span>
  );
  return (
    <div>
      {isProjectCard ? ended ? projectCardDeadlinePassed : projectCardDeadline
        : ended
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
  isProjectCard: PropTypes.bool,
};
ProjectSummaryTime.defaultProps = {
  ended: false,
  isProjectCard: false,
};

export default ProjectSummaryTime;
