import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ProjectImg from '../ProjectImage';
import ProjectTitle from '../ProjectTitle'
import '../../../assets/icons/font/flaticon.css';

function ProjectCard({ project }) {
  return (
    <div className="projectInfo">
      <ProjectImg imgUrl={project.imageURL} />
      <div>
        <ProjectTitle title={project.title} />
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

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    budget: PropTypes.number,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.number,
    })),
  }).isRequired,
};

export default ProjectCard;
