import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectSummary from './components/ProjectSummary';
import { requestForProjects } from '../../services/actions/getProjectsActions';
import PageLoading from '../../../../components/Loadings/PageLoading';

class Projects extends React.Component {
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects, loading } = this.props;
    const projectsList = projects.map(item => (
      <ProjectSummary
        image={item.imageURL}
        title={item.title}
        description={item.description}
        skills={item.skills}
        budget={item.budget}
        deadline={item.deadline}
      />
    ));
    return (
      <div className="scrollableSectionSection" style={{ maxHeight: '460px' }}>
        {loading
          ? <PageLoading />
          : projectsList
        }
        <div className="shadowContainer" />
      </div>
    );
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    budget: PropTypes.number,
    deadline: PropTypes.number,
    skills: PropTypes.object,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = store => ({
  projects: store.Home.getProjectsReducer.projects,
  loading: store.Home.getProjectsReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => {
    dispatch(requestForProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
