import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import SkillItem from '../../../../components/SkillItem';

const skills = [
  { points: 10, name: 'Html' },
  { points: 10, name: 'CSS' },
  { points: 10, name: 'OK' },
  { points: 10, name: 'HELLO' },
  { points: 10, name: 'Html' },
];

function OthersProfileSkill({ id }) {
  const skillRow = skills.map((item, index) => (<SkillItem type="Others" skill={item} endorsed={index % 2 === 0} />));
  return (
    <div className="container">
      {skillRow}
    </div>
  );
}

OthersProfileSkill.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OthersProfileSkill;
