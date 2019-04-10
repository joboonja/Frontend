import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HomeHeader from './components/HomeHeader';
import Profiles from './components/Profiles';
import Projects from './components/Projects';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main background">
        <HomeHeader />
        <div className="container" style={{ top: '-25px', position: 'relative' }}>
          <div className="row ">
            <div className="col-md-3">
              <Profiles />
            </div>
            <div className="col-md-9">
              <Projects />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
