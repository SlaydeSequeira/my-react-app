import './App.css';
import React from 'react';
import csi from './OIP.jpg';
import acm from './ACM.png';
function Heading() {
  return (
    <div  class='centered'>
          <h1 id="hackathon-title">Presenting Synergy Hackathon</h1>
          <div id="host-section">
          <h3 id="host">Hosted By</h3>
          <div class="flexbox">
          <img class="icon" src={csi} width="100px" height="100px" alt="Logo" />
          <img class="icon" src={acm} width="100px" height="100px" alt="Logo" />
          </div>
          </div>
    </div>
    
    );
}

export default Heading;