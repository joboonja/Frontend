import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../../../components/Navbar';
import UserProfileShow from '../../components/UserProfileShow';
import Footer from '../../../../components/Footer';
import OthersProfileSkill from '../OthersProfileSkill';
import SelfProfileSkill from '../SelfProfileSkill';
import { requestForProfile } from '../../services/actions/getProfileActions';
import '../../styles.scss';

class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, id } = this.props;
    getProfile(id);
  }

  render() {
    const { id, isSelf, profile } = this.props;
    return (
      <div className="background">
        <Navbar />
        <div className="main">
          <UserProfileShow
            firstName={profile.firstName}
            lastName={profile.lastName}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
            imgUrl={profile.profilePictureURL}
          />
          {
            isSelf ? <SelfProfileSkill id={id} skills={profile.skillsList} />
              : <OthersProfileSkill id={id} skills={profile.skillsList} />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
    bio: PropTypes.string,
    profilePictureURL: PropTypes.string,
    skillsList: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
};

const mapStateToProps = store => ({
  profile: store.Profile.getProfileReducer.profile,
  error: store.Profile.getProfileReducer.error,
  loading: store.Profile.getProfileReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getProfile: (id) => { dispatch(requestForProfile(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
