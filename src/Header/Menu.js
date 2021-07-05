import React from 'react'
// import MenuItem from './MenuItem'
import './Menu.css'
import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';


function Menu() {
  return (
    
    <div className='menu'>

<div className="dropdown">
  <h4 className="dropbtn">Barbarosa</h4>
  <div className="dropdown-content">
  <Link  exact  to="/barbarosa-urdu-subtitles">
  <p >Urdu Subtitles</p>
  </Link>

  <Link  exact  to="/barbarosa-eng-subtitles">
  <p >English Subtitles</p>
  </Link>
  </div>
   </div>




       <div className="dropdown">
  <h4 className="dropbtn">Dirilis Ertugrul</h4>
  <div className="dropdown-content">
 
  <Link exact to="/dirilis-ertugrul-urdu-dubbing">
        <p >Urdu Dubbing</p>
   </Link> 
  
   <Link exact to="/dirilis-ertugrul-english-subtitles">
    <p >English Subtitles</p>
  </Link>
  </div>
   </div>

   <div className="dropdown">
  <h4 className="dropbtn">Kurulus Osman</h4>
  <div className="dropdown-content">
  <Link  exact  to="/kurulus-osman-urdu-dubbing">
  <p >Urdu Dubbing</p>
  </Link>
  <Link  exact  to="/kurulus-osman-urdu-subtitles">
  <p >Urdu Subtitles</p>
  </Link>
  <Link  exact  to="/kurulus-osman-eng-subtitles">
  <p >English Subtitles</p>
  </Link>
  </div>
   </div>

   <div className="dropdown">
  <h4 className="dropbtn">Buyuk Selcuklu</h4>
  <div className="dropdown-content">
  <Link  exact  to="/buyuk-selcuklu-nizam-e-alam">
  <p >Urdu Subtitles</p>
  </Link>
  <Link  exact  to="/buyuk-selcuklu">
  <p >English Subtitles</p>
  </Link>

  </div>
   </div>

   <div className="dropdown">
  <h4 className="dropbtn">Medirman Jalaluddin</h4>
  <div className="dropdown-content">
  <Link  exact  to="/mendirman-jalauddin-">
  <p >Urdu Subtitles</p>
  </Link>
  <Link  exact  to="/mendirman-jalauddin">
  <p >English Subtitles</p>
  </Link>
  </div>
   </div>

   
   <div className="dropdown">
  <h4 className="dropbtn">Movies</h4>
  <div className="dropdown-content">

  <Link  exact  to="/movies-urdu-subtitles">
  <p >Urdu Subtitles</p>
  </Link>

  <Link  exact  to="/movies-eng-subtitles">

  <p >English Subtitles</p>
  </Link>
  
  </div>
   </div>
  
 

     </div>
  )
}

export default Menu;