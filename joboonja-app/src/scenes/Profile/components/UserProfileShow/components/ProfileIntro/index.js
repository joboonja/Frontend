import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function ProfileIntro({ bio }) {
  return (
    <div className="profile-content container">
      <p>
        {bio}
      </p>
    </div>
  );
}

ProfileIntro.propTypes = {
  bio: PropTypes.string.isRequired,
};
