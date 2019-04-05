import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import { connect } from 'react-redux';
import AddSkill from '../../components/AddSkill';
import SkillItem from '../../../../components/SkillItem';
import { requestForRemoveSkill } from '../../services/actions/removeSkillActions';

class SelfProfileSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.skillClicked = this.skillClicked.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loading !== prevState.loading) {
      if (nextProps.error) {
        console.log(nextProps.error);
      }
      return { loading: nextProps.loading };
    }
    return null;
  }

  skillClicked(skill) {
    const { removeSkill } = this.props;
    removeSkill(skill);
  }

  render() {
    const { id, skills } = this.props;
    const skillRow = skills.map(item => (<SkillItem type="Self" skill={item} onClick={() => this.skillClicked(item)} />));
    return (
      <div className="container">
        <AddSkill skillNames={['html']} />
        {skillRow}
      </div>
    );
  }
}

SelfProfileSkill.propTypes = {
  id: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  })),
  removeSkill: PropTypes.func.isRequired,
};

SelfProfileSkill.defaultProps = {
  skills: [],
};
const mapStateToProps = store => ({
  success: store.Profile.removeSkillReducer.success,
  error: store.Profile.removeSkillReducer.error,
  loading: store.Profile.removeSkillReducer.loading,
  skills: store.Profile.getProfileReducer.profile.skillsList,
});

const mapDispatchToProps = dispatch => ({
  removeSkill: (skillName) => { dispatch(requestForRemoveSkill(skillName)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelfProfileSkill);
