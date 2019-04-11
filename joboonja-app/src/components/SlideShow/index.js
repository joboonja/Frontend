import React from 'react';
import back1 from './assets/back1.jpg';
import back2 from './assets/back2.jpg';
import back3 from './assets/back3.jpg';
import './styles.scss';

function SlideShow() {
  return (
    <div className="slideShow">
      <img src={back1} alt="back" />
      <img src={back2} alt="back" />
      <img src={back3} alt="back" />
    </div>
  );
}

export default SlideShow;
