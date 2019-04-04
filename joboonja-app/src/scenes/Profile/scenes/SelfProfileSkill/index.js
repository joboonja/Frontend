import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import AddSkill from '../../components/AddSkill';
import SkillItem from '../../../../components/SkillItem';

function SelfProfileSkill({ id, skills }) {
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
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  })),
};

SelfProfileSkill.defaultProps = {
  skills: [],
};
export default SelfProfileSkill;
