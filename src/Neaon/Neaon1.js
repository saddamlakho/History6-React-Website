import React from 'react'
import './Neaons.css';
import { Link } from 'react-router-dom';



function Neaon1() {
    return (
        <div>

<div class="button" id="button-3">
    <div id="circle"></div>
  
  
    <Link  exact  to="/dirilis-ertugrul-urdu-dubbing">
    <h4>Urdu Dubbing</h4>
    </Link> 
   
  
  </div>
  <br/>
  <div className="button" id="button-3">
    <div id="circle"></div>

    <Link  exact  to="/dirilis-ertugrul-english-subtitles">
    <h4>English subtitles</h4>
    </Link> 
  
  </div>
   </div>
    )
}

export default Neaon1;
