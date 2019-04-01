import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import AddSkill from '../../components/AddSkill';
import SkillItem from '../../../../components/SkillItem';

const skills = [
  { points: 10, name: 'Html' },
  { points: 10, name: 'CSS' },
  { points: 10, name: 'OK' },
  { points: 10, name: 'HELLO' },
  { points: 10, name: 'Html' },
];

function SelfProfileSkill({ id }) {
  const skillRow = skills.map(item => (<SkillItem type="Self" skill={item} />));
  return (
    <div className="container">
      <AddSkill skillNames={['html']} />
      {skillRow}
    </div>
  );
}

SelfProfileSkill.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SelfProfileSkill;
