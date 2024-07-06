import React, { useState, useEffect, useCallback } from 'react';
import Typical from 'react-typical';
import videor from '../assetss/img/bg-video.mp4'

const Header = ({ sharedData }) => {

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    if (sharedData) {
      setTitles(sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat());
    }
  }, [sharedData]);




  const HeaderTitleTypeAnimation = useCallback(() => {
    return <Typical className="title-styles" steps={titles} loop={50} />;
  }, [titles]);

  return (
    <header id="home" style={{ height: "100vh", display: 'block' }}>
      <div className="header-container">
        <video className="background-video" autoPlay loop muted>
          <source src={videor} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header-content">
          <div className="row aligner" style={{ height: '100%' }}>
            <div className="col-md-12">
              <div>
                <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                <br />
                <h1 className="mb-0">
                  <Typical steps={[sharedData.name]} wrapper="p" />
                </h1>
                <div className="title-container">
                  <HeaderTitleTypeAnimation />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
