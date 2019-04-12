/* eslint-disable no-nested-ternary */
import React from 'react';
import './styles.scss';
import back1 from './assets/back1.jpg';
import back2 from './assets/back2.jpg';
import back3 from './assets/back3.jpg';

function SlideShow() {
  return (
    <div className="slideShow">
      <img src={back1} alt="1" />
      <img src={back2} alt="2" />
      <img src={back3} alt="3" />
    </div>
  );
}

export default SlideShow;
