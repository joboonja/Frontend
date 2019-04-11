/* eslint-disable no-nested-ternary */
import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ProjectIconTitle from './ProjectIconTitle';
import ProjectIconText from './ProjectIconText';

function IconItem({ textTitle, text, type }) {
  return (
    <div className="iconItem">
      <div className="row">
        <div className="col-auto projectIcon">
          <i className={type === 'deadline' ? 'flaticon-deadline projectIcon'
            : type === 'money' ? 'flaticon-money-bag projectIcon money'
              : type === 'deadlineReached' ? 'flaticon-deadline projectIcon deadlinePassed' : ''}
          />
        </div>
        <ProjectIconTitle text={textTitle} type={type} />
        <ProjectIconText text={text} type={type} />
      </div>
    </div>
  );
}

IconItem.propTypes = {
  text: PropTypes.string.isRequired,
  textTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IconItem;
