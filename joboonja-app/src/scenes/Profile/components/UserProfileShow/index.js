import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './components/ProfileHeader';
import ProfileIntro from './components/ProfileIntro';

function UserProfileShow({
  firstName, lastName, jobTitle, imgUrl, bio,
}) {
  return (
    <div>
      <ProfileHeader
        firstName={firstName}
        lastName={lastName}
        jobTitle={jobTitle}
        imgUrl={imgUrl}
      />
      <ProfileIntro
        bio={bio}
      />
    </div>
  );
}

UserProfileShow.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfileShow;
