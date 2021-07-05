import React from 'react'
import './Neaons.css';
import { Link } from 'react-router-dom';


function Neaon3() {
    return (
        <div>

  
  <div class="button" id="button-3">
    <div id="circle"></div>
    <Link  exact  to="/buyuk-selcuklu-nizam-e-alam">
      <h4> Urdu Subtitles </h4>
      </Link>
  </div>
  
  <br/>

  <div class="button" id="button-3">
    <div id="circle"></div>

    <Link  exact  to="buyuk-selcuklu">
    <h4> English Subtitles </h4>
    </Link>
  
  </div>

        </div>
    )
}

export default Neaon3;