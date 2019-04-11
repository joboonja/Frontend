import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function ProjectDetailedDescription({ description }) {
  return (
    <div>
      <div className="descriptionTitle">
              توضیحات
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}

ProjectDetailedDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProjectDetailedDescription;
