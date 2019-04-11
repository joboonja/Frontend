import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ProjectImg from './ProjectImage';
import ProjectTitle from './ProjectTitle';
import ProjectDetailedDescription from './ProjectDetailedDescription';
import '../../../assets/icons/font/flaticon.css';
import convertEnglishNumbersToPersian from '../../../../../../services/convertEnglishNumbersToPersian';
import IconItem from '../IconItem';

function ProjectCard({ project }) {
  const budgetNum = `${convertEnglishNumbersToPersian(project.budget.toString())} تومان`;
  return (
    <div className="projectInfo">
      <ProjectImg imgUrl={project.imageURL} />
      <div>
        <ProjectTitle title={project.title} />
        <IconItem type="deadline" text="۱۷ دقیقه و ۲۵ ثانیه" textTitle="زمان باقی‌مانده:" />
        <IconItem type="money" text={budgetNum} textTitle="بودجه:" />
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
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
};

export default ProjectCard;
