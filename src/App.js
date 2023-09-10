import './App.css';
import Navbar1 from './navbar';
import BirdsComponent from './VantaC';
import React, { useEffect, useRef } from 'react';
function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
        <BirdsComponent/>
        <Navbar1/>
        </div>
      </nav>
    </header>
  );
}

export default Header;