import React from 'react';
import ProjectTime from '../../../../../../../../components/ProjectTime';

function ProjectDescription() {
  return (
    <div>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-md-8 projectSummaryTitle">
          <h6>
            وب‌سایت فروشگاهی مشابه دیجی‌کالا
          </h6>
        </div>
        <div className="col-md-4">
          <ProjectTime time={1556112461000} showStyle='projectSummary' />
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
