import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function ProjectSkillItem({ name, point }) {
  return (
    <span className="skillItem">
      {name}
      <span className="badge alreadyEndorsedBadge">{point}</span>
    </span>
  );
}

ProjectSkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired,
};

export default ProjectSkillItem;
