import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ProfileImg from './components/ProfileImg';
import ProfileName from './components/ProfileName';

function ProfileHeader({
  imgUrl, firstName, lastName, jobTitle,
}) {
  return (
    <div>
      <div className="topBodyProfile" />
      <div className="topBodyShadow" />
      <div className="container">
        <div className="row">
          <ProfileImg imgUrl={imgUrl} />
          <ProfileName firstName={firstName} lastName={lastName} jobTitle={jobTitle} />
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default ProfileHeader;
