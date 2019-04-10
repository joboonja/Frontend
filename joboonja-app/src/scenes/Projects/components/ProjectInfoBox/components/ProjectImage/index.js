import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import blankProject from './assets/blank_project.png';

function ProjectImg({ imgUrl }) {
  return (
    <img className="projectImage" src={imgUrl || blankProject} alt="PROJECT" />
  );
}

ProjectImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ProjectImg;
