import React from 'react';
import PropTypes from 'prop-types';

function ProjectSummaryTime({days, hours, minutes}) {
  return (
    <div>
      {days}
      :
      {hours}
      :
      {minutes}
    </div>
  );
}
export default ProjectSummaryTime;
