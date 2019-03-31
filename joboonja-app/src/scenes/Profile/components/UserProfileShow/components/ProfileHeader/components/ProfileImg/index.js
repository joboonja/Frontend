import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function ProfileImg({ imgUrl }) {
  return (
    <div className="col-auto">
      <div className="row">
        <div className="profile-img-container">
          <img className="profile-img" src={imgUrl} alt="PROFILE" />
        </div>
        <div className="profile-badge" />
      </div>
    </div>
  );
}

ProfileImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ProfileImg;