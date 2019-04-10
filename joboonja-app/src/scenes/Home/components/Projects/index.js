import React from 'react';
import ProjectSummary from './components/ProjectSummary';

function Projects() {
  return (
    <div className="scrollableSectionSection" style={{ maxHeight: '460px' }}>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <div className="shadowContainer" />
    </div>
  );
}

export default Projects;
