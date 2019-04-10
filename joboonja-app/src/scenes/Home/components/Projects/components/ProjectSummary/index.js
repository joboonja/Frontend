import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../../../components/Card';
import blankProject from './assets/project_blank.png';
import './styles.scss';
import ProjectDescription from './components/ProjectDescription';

function ProjectSummary({ image }) {
  return (
    <div>
      <Card style={{ width: '100%', marginBottom: '13px' }} hoverable onClick={() => {}}>
        <div className="row">
          <div className="col-md-2">
            <img src={image || blankProject} className="projectSummaryImage" alt="project" />
          </div>
          <div className="col-md-10">
            <ProjectDescription />
          </div>
        </div>
      </Card>
    </div>
  );
}

ProjectSummary.propTypes = {
  image: PropTypes.string,
};
ProjectSummary.defaultProps = {
  image: '',
};

export default ProjectSummary;
