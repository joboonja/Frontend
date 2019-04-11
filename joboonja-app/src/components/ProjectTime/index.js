/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectSummaryTime from './components/ProjectSummaryTime';
import convertEnglishNumbersToPersian from '../../services/convertEnglishNumbersToPersian';
import IconItem from '../IconItem';
import BidCard from '../../scenes/Projects/components/ProjectInfoBox/components/BidCard';

function ProjectTime({ time, showStyle }) {
  const days = Math.floor((time - Date.now()) / (36e5 * 24));
  const hours = Math.floor(((time - days * (36e5 * 24)) - Date.now()) / (36e5));
  const minutes = Math.floor(
    (
      (time - days * (36e5 * 24) - hours * 36e5) - Date.now()
    ) / (1000 * 60),
  );
  const ended = days < 0 || hours < 0 || minutes < 0;
  const daysStr = convertEnglishNumbersToPersian(days.toString());
  const hoursStr = convertEnglishNumbersToPersian(hours.toString());
  const minutesStr = convertEnglishNumbersToPersian(minutes.toString());
  return (
    <div>
      {
        showStyle === 'winner' ? (ended ? <IconItem type="winner" text="تعیین نشده" textTitle="برنده: " /> : '')
          : showStyle === 'projectCard' ? (ended ? <IconItem type="deadlineReached" text="مهلت تمام شده" textTitle="" />
            : <IconItem type="deadline" text={`${daysStr} روز و ${hoursStr} ساعت و ${minutesStr} دقیقه`} textTitle="زمان باقی‌مانده:" />)
            : showStyle === 'bidCard' ? <BidCard ended={ended} />
              : (
                <ProjectSummaryTime
                  days={daysStr}
                  hours={hoursStr}
                  minutes={minutesStr}
                  ended={ended}
                />
              )
     }
    </div>
  );
}

ProjectTime.propTypes = {
  time: PropTypes.number.isRequired,
  showStyle: PropTypes.oneOf(['projectSummary']).isRequired,
};

export default ProjectTime;
