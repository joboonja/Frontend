import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from '../../../../components/Buttons/AddButton';
import SkillSelect from './components/SkillsSelect';
import SkillTitle from './components/SkillTitle';
import './styles.scss';
import { requestForAddSkill } from '../../services/actions/addSkillAction';

function AddSkill({ addSkill, skill, loading }) {
  return (
    <div className="add-skill-container">
      <div className="col-auto">
        <SkillTitle>
          مهارت‌ها
        </SkillTitle>
      </div>
      <div className="add-skill-section row">
        <div className="col-7 add-skill-select-container">
          <SkillSelect />
        </div>
        <div className="col-5 add-skill-button-container">
          <AddButton
            onClick={() => {
              if (skill) {
                addSkill(skill);
              }
            }}
            loading={loading}
          >
            افزودن مهارت
          </AddButton>
        </div>
      </div>
    </div>
  );
}

AddSkill.propTypes = {
  addSkill: PropTypes.func.isRequired,
  skill: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
AddSkill.defaultProps = {
};

const mapStateToProps = store => ({
  skill: store.Profile.addSkillReducer.skill,
  loading: store.Profile.addSkillReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  addSkill: (skillName) => { dispatch(requestForAddSkill(skillName)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSkill);
