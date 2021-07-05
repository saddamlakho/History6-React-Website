import React from 'react'
import './Neaons.css';
import { Link } from 'react-router-dom';


function Neaon4() {
    return (
        <div>
            
            <div class="button2" id="button-3">
    <div id="circle"></div>
    <Link  exact  to="/mendirman-jalauddin-">
      <h4> Urdu Subtitles </h4>
      </Link>
  </div>
  
  <br/>

  <div class="button2" id="button-3">
    <div id="circle"></div>

    <Link  exact  to="/mendirman-jalauddin">
    <h4> English Subtitles </h4>
    </Link>
  
  </div>


        </div>
    )
}

export default Neaon4
