import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../components/SkillItem/styles.scss';
import './styles.scss';
import '../../../assets/icons/font/flaticon.css';
import ProjectSkillItem from './components/SkillItem';

function SkillsCard({ skills }) {
  return (
    <div className="container projectSkills">
      <div className="skillsTitle">
        <h5>
             مهارت‌های لازم:
        </h5>
      </div>
      <div className="skillItems">
        {Object.values(skills).map(
          item => (<ProjectSkillItem point={item.points} name={item.name} />),
        )
        }
      </div>
    </div>
  );
}

SkillsCard.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
  })),
};

SkillsCard.defaultProps = {
  skills: [],
};

export default SkillsCard;
