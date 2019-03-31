import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './components/ProfileHeader';
import ProfileIntro from './components/ProfileIntro';

function UserProfileShow({
  firstName, lastName, nickName, imgUrl, bio,
}) {
  return (
    <div>
      <ProfileHeader
        firstName={firstName}
        lastName={lastName}
        nickName={nickName}
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
  nickName: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfileShow;
