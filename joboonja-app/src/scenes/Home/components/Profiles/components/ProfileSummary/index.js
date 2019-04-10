import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../../../components/Card';
import './styles.scss';
import blankProfile from './assets/blank_profile.png';

function ProfileSummary({
  onClick, imgSrc, firstName, lastName, jobTitle,
}) {
  return (
    <div style={{ marginBottom: '4px' }}>
      <Card onClick={onClick} style={{ width: '100%' }} hoverable>
        <div style={{ display: 'flex' }}>
          <img alt="p" className="profileSummaryPic" src={imgSrc || blankProfile} />
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '8px' }}>
            <div className="profileSummaryName">
              {`${firstName} ${lastName}`}
            </div>
            <div className="profileSummaryJobTitle">
              {jobTitle}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

ProfileSummary.propTypes = {
  onClick: PropTypes.func,
  imgSrc: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

ProfileSummary.defaultProps = {
  onClick: null,
  imgSrc: '',
};

export default ProfileSummary;
