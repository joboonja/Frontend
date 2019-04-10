import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchUser from './components/SearchUser';
import ProfileSummary from './components/ProfileSummary';
import '../../styles.scss';
import { requestForUsers } from '../../services/actions/getUsersAction';
import PageLoading from '../../../../components/Loadings/PageLoading';

class Profiles extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { loading, users } = this.props;
    const profiles = (
      <div className="scrollableSectionSection">
        {users.map(item => (
          <ProfileSummary
            jobTitle={item.jobTitle}
            lastName={item.lastName}
            firstName={item.firstName}
            imgSrc={item.profilePictureUrl}
            onClick={() => {}}
          />
        ))}
        <div className="shadowContainer" />
      </div>
    );
    return (
      <div>
        <SearchUser />
        {loading
          ? <PageLoading />
          : profiles}
      </div>
    );
  }
}

Profiles.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    id: PropTypes.string,
    jobTitle: PropTypes.string,
    profilePictureUrl: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  users: store.Home.getUsersReducer.users,
  loading: store.Home.getUsersReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => { dispatch(requestForUsers()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
