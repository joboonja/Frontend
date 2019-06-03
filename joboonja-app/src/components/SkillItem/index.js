/* eslint-disable react/destructuring-assignment,consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import SelfSkillItem from './components/SelfSkillItem';
import OthersSkillItem from './components/OthersSkillItem';

export default function SkillItem({
  type, endorsed, onClick, skill, loading,
}) {
  switch (type) {
    case 'Self':
      return (
        <SelfSkillItem skill={skill} onClick={onClick} />
      );
    case 'Others':
      return (
        <OthersSkillItem skill={skill} onClick={onClick} endorsed={endorsed} loading={loading} />
      );
    default:
      return (
        <div />
      );
  }
}

SkillItem.propTypes = {
  type: PropTypes.oneOf(['Self', 'Others']).isRequired,
  endorsed: PropTypes.bool,
  onClick: PropTypes.func,
  skill: PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
  loading: PropTypes.bool,
};
SkillItem.defaultProps = {
  endorsed: true,
  onClick: () => {},
  loading: false,
};
