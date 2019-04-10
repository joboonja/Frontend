import React from 'react';
import './styles.scss';
import ProjectImg from '../ProjectImage';

function ProjectCard({ imgUrl }) {
  return (
      <div className="projectInfo">
        <ProjectImg imgUrl={imgUrl} />
        <div>
          <h3 className="projectTitle col-auto">
            پروژه طراحی سایت جاب‌اونجا
          </h3>
          <div className="iconItem">
            <div className="row">
              <div className="col-auto projectIcon">
                <i className="flaticon-deadline projectIcon" />
              </div>
              <div className="col-auto projectInfoTitle">زمان باقی‌مانده:</div>
              <div className="col-auto projectInfoText">۱۷ دقیقه و ۲۵ ثانیه</div>
            </div>
          </div>
          <div className="iconItem">
            <div className="row">
              <div className="col-auto projectIcon money">
                <i className="flaticon-money-bag projectIcon money" />
              </div>
              <div className="col-auto projectInfoTitle money">بودجه:</div>
              <div className="col-auto projectInfoText money">۲۵۰۰ تومان</div>
            </div>
          </div>
          <div className="descriptionTitle">
            توضیحات
          </div>
          <div className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
            است.
          </div>
        </div>
      </div>
  );
}

export default ProjectCard;
