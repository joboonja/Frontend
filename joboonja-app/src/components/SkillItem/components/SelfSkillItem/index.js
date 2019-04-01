import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import '../../styles.scss';

function SelfSkillItem({ onClick, skill }) {
  return (
    <span className="skillItem selfEndorseSkillItem ">
      <button type="button" onClick={onClick} data-hover="-" className="badge selfEndorseBadge">
        {skill.points}
      </button>
      {skill.name}
    </span>
  );
}

SelfSkillItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  skill: PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
};

export default SelfSkillItem;
