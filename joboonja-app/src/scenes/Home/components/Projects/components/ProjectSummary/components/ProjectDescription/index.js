import React from 'react';
import PropTypes from 'prop-types';
import ProjectTime from '../../../../../../../../components/ProjectTime';
import './styles.scss';
import convertEnglishNumbersToPersian
  from '../../../../../../../../services/convertEnglishNumbersToPersian';

function ProjectDescription({
  title, description, budget, skills, deadline, winner,
}) {
  const budgetStr = convertEnglishNumbersToPersian((budget).toString());
  const skillsItems = Object.values(skills).map(item => <span className="projectSummarySkill">{item.name}</span>);
  return (
    <div>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-md-8 projectSummaryTitle">
          <h6>
            {title}
          </h6>
        </div>
        <div className="col-md-4" style={{ textAlign: 'left' }}>
          <ProjectTime time={deadline} winner={winner} showStyle="projectSummary" />
        </div>
      </div>
      <div className="row">
        <p className="projectSummaryDescription">
          {description}
        </p>
        <p className="projectSummaryBudget">
          {`بودجه: ${budgetStr} تومان`}
        </p>
      </div>
      <div style={{ direction: 'rtl', textAlign: 'right' }}>
        <span className="projectSummarySkillTitle">
          مهارت‌ها:
        </span>
        {skillsItems}
      </div>
    </div>
  );
}

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  skills: PropTypes.arrayOf(PropTypes.Object).isRequired,
  deadline: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
};

export default ProjectDescription;
