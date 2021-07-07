import React from 'react'
import './Neaons.css';
import { Link } from 'react-router-dom';



function Neaon2() {
    return (
        <div>

  <div class="button" id="button-3">
    <div id="circle"></div>

    <Link  exact  to="/kurulus-osman-urdu-dubbing">
       <h4>Urdu Dubbing</h4>
       </Link> 
  </div>
  
  <br/>
  
  <div class="button" id="button-3">
    <div id="circle"></div>
  
    <Link  exact  to="/kurulus-osman-urdu-subtitles">
      <h4>Urdu Subtitles</h4>
    </Link> 
  </div>
  
  <br/>
  
  <div class="button" id="button-3">
    <div id="circle"></div>
  
    <Link  exact  to="/kurulus-osman-eng-subtitles">
       <h4>English Subtitles</h4> 
    </Link>  
  </div>

        </div>
    )
}

export default Neaon2;
