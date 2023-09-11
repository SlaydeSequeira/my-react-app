import './App.css';
import myImg from './logo.svg';
import BirdsComponent from './VantaC';
import Heading from './heading';
import React, { useEffect, useRef } from 'react';
import About from './about';
function Navbar1() {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
    <div id="navbar">
      <img src={myImg} width="50px" alt="Logo" />
      <a onClick={() => scrollToElement('home')}>Home</a>
      <a onClick={() => scrollToElement('about')}>About</a>
      <a onClick={() => scrollToElement('schedule')}>Schedule</a>
      <a onClick={() => scrollToElement('domain')}>Domain</a>
      <a onClick={() => scrollToElement('prices')}>Prices</a>
      <a onClick={() => scrollToElement('faq')}>FAQ</a>
      <a onClick={() => scrollToElement('sponsors')}>Sponsors</a>
    </div>
    <div id="home">
    <div className="birds-container">
          <BirdsComponent />
          <div className="heading-overlay">
            <Heading />
        </div>
        </div>
    </div>
    <div id="about">
    <div className="Abt">
            <About/>
        </div>
    </div>
    <div id="schedule"></div>
    <div id="domain"></div>
    <div id="prices"></div>
    <div id="faq"></div>
    <div id="sponsors"></div>
    </div>
  );
}

export default Navbar1;
