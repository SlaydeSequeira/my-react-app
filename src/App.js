import './App.css';
import Navbar1 from './navbar';
import React from 'react';


function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Navbar1 />
        </div>
      </nav>
    </header>
  );
}

export default Header;