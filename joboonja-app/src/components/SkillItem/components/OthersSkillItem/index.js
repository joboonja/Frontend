import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import '../../styles.scss';
import { ClipLoader } from 'react-spinners';

function OthersSkillItem({
  onClick, endorsed, skill, loading,
}) {
  const points = !endorsed
    ? (
      <button onClick={onClick} data-hover="-" className="badge endorseBadge" type="button" disabled={loading}>
        { !loading ? skill.points
          : <ClipLoader size={12} /> }
      </button>
    )
    : (
      <span className="badge alreadyEndorsedBadge">{skill.points}</span>
    );
  const skillClass = loading ? 'skillItem' : 'skillItem othersSkillItem';
  return (
    <span className={skillClass}>
      {skill.name}
      {points}
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
  loading: PropTypes.bool,
};

OthersSkillItem.defaultProps = {
  onClick: () => { },
  endorsed: false,
  loading: false,
};

export default OthersSkillItem;
