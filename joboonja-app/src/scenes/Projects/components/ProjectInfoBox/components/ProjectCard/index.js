/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ProjectImg from './ProjectImage';
import ProjectTitle from './ProjectTitle';
import ProjectDetailedDescription from './ProjectDetailedDescription';
import '../../../assets/icons/font/flaticon.css';
import convertEnglishNumbersToPersian from '../../../../../../services/convertEnglishNumbersToPersian';
import IconItem from '../../../../../../components/IconItem';
import ProjectTime from '../../../../../../components/ProjectTime';

function ProjectCard({ project }) {
  const budgetNum = `${convertEnglishNumbersToPersian(project.budget.toString())} تومان`;
  return (
    <div className="projectInfo">
      <ProjectImg imgUrl={project.imageURL} />
      <div>
        <ProjectTitle title={project.title} />
        <ProjectTime showStyle="projectCard" time={project.deadline} winner={project.winner} />
        <IconItem type="money" text={budgetNum} textTitle="بودجه:" />
        <ProjectTime showStyle="winner" time={project.deadline} winner={project.winner} />
        <ProjectDetailedDescription description={project.description} />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    budget: PropTypes.number,
    deadline: PropTypes.number,
    hasBidOrNot: PropTypes.bool,
    winner: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
};

export default ProjectCard;
