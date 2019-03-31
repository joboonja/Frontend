import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function ProfileName({ firstName, lastName, nickName }) {
  return (
    <div className="col-auto">
      <div>
        <h2 className="profile-name">
          {`${firstName} ${lastName}`}
        </h2>
        <div className="nick-name">
          {nickName}
        </div>
      </div>
    </div>
  );
}

ProfileName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
};

export default ProfileName;
