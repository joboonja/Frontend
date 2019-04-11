/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { requestForProject } from '../../services/actions/getProjectActions';
import PageLoading from '../../../../components/Loadings/PageLoading';
import PageError from '../../../../components/Errors/PageError';
import './styles.scss';
import ProjectCard from '../../components/ProjectInfoBox/components/ProjectCard';
import '../../../Profile/components/UserProfileShow/components/ProfileHeader/styles.scss';
import SkillsCard from '../../components/ProjectInfoBox/components/SkillsCard';
import BidCard from "../../components/ProjectInfoBox/components/BidCard";


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
      id, project,
    } = this.props;
    return (
      <div>
        <div className="topBodyProject" />
        <div className="topBodyShadow" />
        <div className="container cardItem">
          <ProjectCard project={project} />
        </div>
        <SkillsCard skills={project.skills} />
        <BidCard />
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
      </div>
    );
  }
}

ProjectBid.propTypes = {
  id: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    budget: PropTypes.number,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
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
