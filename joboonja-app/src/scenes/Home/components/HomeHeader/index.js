import React from 'react';
import './styles.scss';
import SearchBar from './components/SearchBar';

function HomeHeader() {
  return (
    <div>
      <div className="homeHeaderContainer">
        <div className="container">
          <h2 className="homeHeaderTitle">
            جاب‌اونجا خوب است!
          </h2>
          <p className="homeHeaderBio">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          </p>
          <SearchBar />

        </div>
      </div>
      <div className="topBodyShadow" />
    </div>
  );
}
export default HomeHeader;
