import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../../../../components/Buttons/AddButton';
import SkillSelect from './components/SkillsSelect';
import SkillTitle from './components/SkillTitle';
import './styles.scss';

export default function AddSkill({ skillNames, onAddSkill }) {
  return (
    <div className="add-skill-container">
      <div className="col-auto">
        <SkillTitle>
          مهارت‌ها
        </SkillTitle>
      </div>
      <div className="add-skill-section row">
        <div className="col-7 add-skill-select-container">
          <SkillSelect skills={skillNames} />
        </div>
        <div className="col-5 add-skill-button-container">
          <AddButton onClick={onAddSkill}>
            افزودن مهارت
          </AddButton>
        </div>
      </div>
    </div>
  );
}

AddSkill.propTypes = {
  skillNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddSkill: PropTypes.func,
};
AddSkill.defaultProps = {
  onAddSkill: () => {},
};
