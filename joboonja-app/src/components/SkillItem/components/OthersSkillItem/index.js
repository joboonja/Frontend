import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import '../../styles.scss';

function OthersSkillItem({ onClick, endorsed, skill }) {
  const points = endorsed
    ? (
      <button onClick={onClick} data-hover="-" className="badge endorseBadge" type="button">
        {skill.points}
      </button>
    )
    : (
      <span className="badge alreadyEndorsedBadge">{skill.points}</span>
    );

  return (
    <span className="skillItem othersSkillItem">
      {points}
      {skill.name}
    </span>
  );
}

OthersSkillItem.propTypes = {
  endorsed: PropTypes.bool,
  onClick: PropTypes.func,
  skill: PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
};

OthersSkillItem.defaultProps = {
  onClick: () => { },
  endorsed: false,
};

export default OthersSkillItem;
