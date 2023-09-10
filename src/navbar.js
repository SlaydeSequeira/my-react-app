import './App.css';
import React from 'react';
import myImg from './logo.svg'


function Navbar1(){
    return(
        <div id="navbar">
          <img src={myImg} width="50px"/>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#domain">Domain</a>
            <a href="#prices">Prices</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <div id="home">
            </div>
            <div id="about"></div>
            <div id="schedule"></div>
            <div id="domain"></div>
            <div id="prices"></div>
            <div id="faq"></div>
            <div id="sponsors"></div>
          </div>
    );
}
export default Navbar1;