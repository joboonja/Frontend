import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import { connect } from 'react-redux';
import SkillItem from '../../../../components/SkillItem';
import { requestForEndorse } from '../../services/actions/endorseActions';

class OthersProfileSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
    };
  }

  render() {
    const {
      id, skills, endorse, loading,
    } = this.props;
    const { skill } = this.state;
    const skillRow = skills.map(item => (
      <SkillItem
        onClick={() => {
          this.setState({ skill: item.name });
          endorse(id, item.name);
        }}
        type="Others"
        skill={item}
        endorsed={item.endorsedOrNot}
        loading={item.name === skill && loading}
      />
    ));
    return (
      <div className="container">
        <div style={{ textAlign: 'left' }}>
          {skillRow}
        </div>
      </div>
    );
  }
}

OthersProfileSkill.propTypes = {
  id: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
    endorsedOrNot: PropTypes.boolean,
  })),
  endorse: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

OthersProfileSkill.defaultProps = {
  skills: [],
};

const mapStateToProps = store => ({
  skills: store.Profile.getProfileReducer.profile.skillsList,
  loading: store.Profile.endorseReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  endorse: (id, skillName) => { dispatch(requestForEndorse(id, skillName)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(OthersProfileSkill);
