/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectSummaryTime from './components/ProjectSummaryTime';
import convertEnglishNumbersToPersian from '../../services/convertEnglishNumbersToPersian';
import IconItem from '../IconItem';
import BidCard from '../../scenes/Projects/components/ProjectInfoBox/components/BidCard';
import { requestForProject } from '../../scenes/Projects/services/actions/getProjectActions';

class ProjectTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date().getTime(), endedBefore: true, interval: '' };
  }

  componentDidMount() {
    const { time } = this.props;
    const { now } = this.state;
    if (time < now) {
      this.setState({ endedBefore: true });
    } else {
      this.setState({
        interval: setInterval(() => {
          this.setState({ now: new Date() });
        }, 50),
        endedBefore: false,
      });
    }
  }

  render() {
    const {
      time, showStyle, id, winner, getProject,
    } = this.props;
    const { now, interval, endedBefore } = this.state;
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
    if (ended && !endedBefore) {
      clearInterval(interval);
      this.setState({ endedBefore: true });
      if (showStyle === 'bidCard') {
        setTimeout(() => {
          getProject(id);
        }, '5000');
      }
    }
    const daysStr = convertEnglishNumbersToPersian(days.toString());
    const hoursStr = convertEnglishNumbersToPersian(hours.toString());
    const minutesStr = convertEnglishNumbersToPersian(minutes.toString());
    const secondsStr = convertEnglishNumbersToPersian(seconds.toString());
    const daysInfoStr = days > 0 ? `${daysStr} روز و ` : '';
    const hoursInfoStr = hours > 0 ? `${hoursStr} ساعت و ` : '';
    const minutesInfoStr = minutes > 0 ? `${minutesStr} دقیقه و ` : '';
    const secondsInfoStr = seconds > 0 ? `${secondsStr} ثانیه` : '';

    return (
      <div>
        {
          showStyle === 'winner' ? (ended ? (
            <IconItem
              type="winner"
              text={!winner ? 'تعیین نشده' : winner}
              textTitle="برنده: "
            />
          ) : '')
            : showStyle === 'projectCard' ? (ended
              ? <IconItem type="deadlineReached" text="مهلت تمام شده" textTitle="" />
              : (
                <IconItem
                  type="deadline"
                  text={daysInfoStr + hoursInfoStr + minutesInfoStr + secondsInfoStr}
                  textTitle="زمان باقی‌مانده:"
                />
              ))
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
}

ProjectTime.propTypes = {
  time: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
  showStyle: PropTypes.oneOf(['projectSummary']).isRequired,
  id: PropTypes.string,
  getProject: PropTypes.func.isRequired,
};

ProjectTime.defaultProps = {
  id: '',
};
const mapDispatchToProps = dispatch => ({
  getProject: (id) => { dispatch(requestForProject(id)); },
});

export default connect(null, mapDispatchToProps)(ProjectTime);
