import React from 'react';
import ProjectTime from '../../../../../../../../components/ProjectTime';
import './styles.scss';
import convertEnglishNumbersToPersian
  from '../../../../../../../../services/convertEnglishNumbersToPersian';

const s = ['C++', 'Html', 'Java'];
function ProjectDescription() {
  const budget = convertEnglishNumbersToPersian((2500).toString());
  const skills = s.map(item => <span className="projectSummarySkill">{item}</span>);
  return (
    <div>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-md-8 projectSummaryTitle">
          <h6>
            وب‌سایت فروشگاهی مشابه دیجی‌کالا
          </h6>
        </div>
        <div className="col-md-4">
          <ProjectTime time={1556112461000} showStyle="projectSummary" />
        </div>
      </div>
      <div className="row">
        <p className="projectSummaryDescription">
         سلام ، من نیاز به اپ موبایل اندروید و iOs دارم که 3 تا آدرس رو برای من به کمک webview لود کنه. ظاهر اپ رو به صورت تصویر گذاشتم . فقط : ..
        </p>
        <p className="projectSummaryBudget">
          {`بودجه: ${budget} تومان`}
        </p>
      </div>
      <div style={{ direction: 'rtl', textAlign: 'right' }}>
        <span className="projectSummarySkillTitle">
          مهارت‌ها:
        </span>
        {skills}
      </div>
    </div>
  );
}

export default ProjectDescription;
