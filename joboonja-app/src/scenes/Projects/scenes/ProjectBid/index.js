/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { requestForProject } from '../../services/actions/getProjectActions';
import PageLoading from '../../../../components/Loadings/PageLoading';
import PageError from '../../../../components/Errors/PageError';

class ProjectBid extends React.Component {
  constructor(props) {
    super(props);
    this.getProjectInfo = this.getProjectInfo.bind(this);
  }

  componentDidMount() {
    const { getProject, id } = this.props;
    getProject(id);
  }


  getProjectInfo() {
    const {
      id,
    } = this.props;
    return (
      <div className="main">
        <div className="topBodyProject" />
        <div className="topBodyShadow" />
        <projectCard />
      </div>
    );
  }

  render() {
    const {
      loading, error,
    } = this.props;
    return (
      <div className="background">
        <Navbar />
        <div className="main">
          {loading ? (
            <PageLoading loading={loading} />
          )
            : error ? <PageError errorMsg={error} />
              : this.getProjectInfo()}
        </div>
        <Footer />
      </div>
    );
  }
}

ProjectBid.propTypes = {
  id: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  // profile: PropTypes.shape({
  //   firstName: PropTypes.string,
  //   lastName: PropTypes.string,
  //   jobTitle: PropTypes.string,
  //   bio: PropTypes.string,
  //   profilePictureURL: PropTypes.string,
  //   skillsList: PropTypes.arrayOf(PropTypes.shape({
  //     name: PropTypes.string,
  //     points: PropTypes.number,
  //   })),
  // }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  project: store.Project.getProjectReducer.project,
  error: store.Project.getProjectReducer.error,
  loading: store.Project.getProjectReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getProject: (id) => { dispatch(requestForProject(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBid);
