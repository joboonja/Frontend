import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function SkillSelect({ skills }) {
  return (
    <select name="skill" className="add-skill-select">
      <option selected disabled>-- انتخاب مهارت --</option>
      {skills.map(item => <option value="Http">{item}</option>)}
    </select>
  );
}

SkillSelect.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillSelect;