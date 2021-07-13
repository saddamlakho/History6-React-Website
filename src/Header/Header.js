 import React from 'react'
 import './Header.css'
 import MenuIcon from '@material-ui/icons/Menu'
 import CloseIcon from '@material-ui/icons/Close'
//  import SearchIcon from '@material-ui/icons/Search';
 import Logo from '../assets/Logo.png'
 import { Link } from 'react-router-dom';
 
//  import Navbar  from 'react-bootstrap/Navbar'
//  import Form  from 'react-bootstrap/Form'
//  import InputGroup from 'react-bootstrap/InputGroup'
//  import FormControl from 'react-bootstrap/FormControl'
//  import Button from 'react-bootstrap/Button'

//  import Navbar from 'react-bootstrap/Navbar'
//  import NavDropdown from 'react-bootstrap/NavDropdown'
//  import Nav from 'react-bootstrap/Nav'
//  import Button from '@material-ui/core/Button';
 
 function Header({ isMenuOpen, setIsMenuOpen }) {

  // const [img, setImg] = useState('');
  // const InputEvent = (event) => {
  //   const data = event.target.value;
  //   console.log(data)
  //   setImg(data)
  // }


   return (
     <div className='header'>

     

   


{/* <Navbar className="bg-light justify-content-between"> */}
  
 
        <div
        className='header__menu'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>  

  

    

        <div className='header__logo'>
       
         
          <img id="home_page"
            className='header__logoImg'
            src={Logo}
            alt=''
          />
     
      </div>   

       {/* <div className="searchBox">

        <input className="searchInput" type="text" name="" placeholder="Search" value={img} onChange={InputEvent}  />
        <button className="searchButton" href="#">
          <i className="material-icons">
            <SearchIcon />
          </i>
        </button>
      </div>
      */}
    
      <Link  exact  to="/new-realease-episode">

     <button className="header_btn" >New Realease</button>
     </Link>
  
   <Link  exact  to="/contact-us">
  <button className="header_btn" >Contact Us</button>
  </Link> 


     </div>
   )
 }

 export default Header;