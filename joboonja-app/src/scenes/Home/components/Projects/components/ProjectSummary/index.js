import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../../../components/Card';
import blankProject from './assets/project_blank.png';
import './styles.scss';
import ProjectDescription from './components/ProjectDescription';

function ProjectSummary({
  image, title, description, budget, skills, deadline
}) {
  return (
    <div>
      <Card style={{ width: '100%', marginBottom: '13px' }} hoverable onClick={() => {}}>
        <div className="row">
          <div className="col-md-2">
            <img src={image || blankProject} className="projectSummaryImage" alt="project" />
          </div>
          <div className="col-md-10">
            <ProjectDescription
              title={title}
              skills={skills}
              description={description}
              budget={budget}
              deadline={deadline}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

ProjectSummary.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  skills: PropTypes.arrayOf(PropTypes.Object).isRequired,
  deadline: PropTypes.number.isRequired,
};
ProjectSummary.defaultProps = {
  image: '',
};

export default ProjectSummary;
