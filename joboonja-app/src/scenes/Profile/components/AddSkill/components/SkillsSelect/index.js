import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import { requestForAllSkill } from '../../../../services/actions/getAllSkillsActions';
import { skillValueChange } from '../../../../services/actions/addSkillAction';

class SkillSelect extends React.Component {
  componentDidMount() {
    const { getAllSkills } = this.props;
    getAllSkills();
  }

  render() {
    const { skills, onSkillValueChange, skill } = this.props;
    return (
      <select
        name="skill"
        className="add-skill-select"
        onChange={e => onSkillValueChange(e.target.value)}
        value={skill}
      >
        <option selected value="" disabled>-- انتخاب مهارت --</option>
        {skills.map(item => <option value={item.name}>{item.name}</option>)}
      </select>
    );
  }
}

SkillSelect.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  getAllSkills: PropTypes.func.isRequired,
  onSkillValueChange: PropTypes.func.isRequired,
  skill: PropTypes.string.isRequired,
};


const mapStateToProps = store => ({
  skills: store.Profile.getAllSkillsReducer.skills,
  skill: store.Profile.addSkillReducer.skill,
});

const mapDispatchToProps = dispatch => ({
  getAllSkills: () => { dispatch(requestForAllSkill()); },
  onSkillValueChange: (skill) => { dispatch(skillValueChange(skill)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillSelect);
