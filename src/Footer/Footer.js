import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css'
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div>
            <div className="footer_bar" >
                   <h4> History6 <CopyrightIcon/> 2021 </h4> 
                   <Link  exact  to="/privacy-policy"> 
                   <p className="footer_link" >Privacy Policy</p>
                   </Link> 
            </div>
        
          

        

        </div>
    )
}

export default Footer
