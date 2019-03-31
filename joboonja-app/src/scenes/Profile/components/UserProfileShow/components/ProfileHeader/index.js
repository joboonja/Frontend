import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ProfileImg from './components/ProfileImg';
import ProfileName from './components/ProfileName';

function ProfileHeader({
  imgUrl, firstName, lastName, nickName,
}) {
  return (
    <div>
      <div className="topBodyProfile" />
      <div className="topBodyShadow" />
      <div className="container">
        <div className="row">
          <ProfileImg imgUrl={imgUrl} />
          <ProfileName firstName={firstName} lastName={lastName} nickName={nickName} />
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
};

export default ProfileHeader;
