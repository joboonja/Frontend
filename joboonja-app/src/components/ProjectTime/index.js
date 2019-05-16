/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectSummaryTime from './components/ProjectSummaryTime';
import convertEnglishNumbersToPersian from '../../services/convertEnglishNumbersToPersian';
import IconItem from '../IconItem';
import BidCard from '../../scenes/Projects/components/ProjectInfoBox/components/BidCard';

function ProjectTime({
  time, showStyle, id, winner,
}) {
  const [now, setNow] = useState(new Date());
  const timerId = setInterval(() => {
    setNow(new Date());
  }, 500);
  const days = Math.floor((time - now) / (36e5 * 24));
  const hours = Math.floor(((time - days * (36e5 * 24)) - now) / (36e5));
  const minutes = Math.floor(
    (
      (time - days * (36e5 * 24) - hours * 36e5) - now
    ) / (1000 * 60),
  );
  const seconds = Math.floor(
    (
      (time - days * (36e5 * 24) - hours * 36e5 - minutes * 1000 * 60) - now
    ) / (1000),
  );
  const ended = days < 0 || hours < 0 || minutes < 0;
  if (ended && winner) {
    clearInterval(timerId);
  }
  const daysStr = convertEnglishNumbersToPersian(days.toString());
  const hoursStr = convertEnglishNumbersToPersian(hours.toString());
  const minutesStr = convertEnglishNumbersToPersian(minutes.toString());
  const secondsStr = convertEnglishNumbersToPersian(seconds.toString());

  return (
    <div>
      {
        showStyle === 'winner' ? (ended ? <IconItem type="winner" text={!winner ? 'تعیین نشده' : winner} textTitle="برنده: " /> : '')
          : showStyle === 'projectCard' ? (ended ? <IconItem type="deadlineReached" text="مهلت تمام شده" textTitle="" />
            : <IconItem type="deadline" text={`${daysStr} روز و ${hoursStr} ساعت و ${minutesStr} دقیقه و ${secondsStr} ثانیه `} textTitle="زمان باقی‌مانده:" />)
            : showStyle === 'bidCard' ? <BidCard ended={ended} id={id} />
              : (
                <ProjectSummaryTime
                  days={daysStr}
                  hours={hoursStr}
                  minutes={minutesStr}
                  seconds={secondsStr}
                  ended={ended}
                />
              )
     }
    </div>
  );
}

ProjectTime.propTypes = {
  time: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
  showStyle: PropTypes.oneOf(['projectSummary']).isRequired,
  id: PropTypes.string,
};

ProjectTime.defaultProps = {
  id: '',
};

export default ProjectTime;
