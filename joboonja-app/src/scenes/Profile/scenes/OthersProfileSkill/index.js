import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import SkillItem from '../../../../components/SkillItem';

function OthersProfileSkill({ id, skills }) {
  const skillRow = skills.map((item, index) => (<SkillItem type="Others" skill={item} endorsed={index % 2 === 0} />));
  return (
    <div className="container">
      {skillRow}
    </div>
  );
}

OthersProfileSkill.propTypes = {
  id: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  })),
};

OthersProfileSkill.defaultProps = {
  skills: [],
};
export default OthersProfileSkill;
