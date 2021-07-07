import React from 'react'
import './Neaons.css';
import { Link } from 'react-router-dom';
import '../MendirmanJalaluddin/Mendirman.css'


function Neaon00() {
    return (
        <div>


    
  
  <br/>
  
  <div className="button1" id="button-3">
    <div id="circle"></div>
  
    <Link  exact  to="/barbarosa-urdu-subtitles">
      <h4>Urdu Subtitles</h4>
    </Link> 
  </div>
  
  <br/>
  
  <div className="button1" id="button-3">
    <div id="circle"></div>
  
    <Link  exact  to="/barbarosa-eng-subtitles">
       <h4>English Subtitles</h4> 
    </Link>  
  </div>

        </div>
    )
}

export default Neaon00;
