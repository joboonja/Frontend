import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import { requestForAllSkill } from '../../../../services/actions/getAllSkillsActions';

class SkillSelect extends React.Component {
  componentDidMount() {
    const { getAllSkills } = this.props;
    getAllSkills();
  }

  render() {
    const { skills } = this.props;
    return (
      <select name="skill" className="add-skill-select">
        <option selected disabled>-- انتخاب مهارت --</option>
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
};


const mapStateToProps = store => ({
  skills: store.Profile.getAllSkillsReducer.skills,
});

const mapDispatchToProps = dispatch => ({
  getAllSkills: () => { dispatch(requestForAllSkill()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillSelect);
