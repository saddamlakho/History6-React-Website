import React from 'react'
import Fade from 'react-reveal/Fade';
import './Scroll.css'
// import Button from '../Buttons/Button'
 import Neaon1 from '../Neaon/Neaon1'




const Scroll = ({title,title2, backgroungImg, link,leftBtnText,leftBtnLink,rightBtnText,rightBtnLink,twoButtons}) => {
    return (
      
        <div className="item" style={{  
         backgroundImage: `url( ${backgroungImg}  )`}}>
          
            <Fade left>
         <h1>{title}</h1>
          
          </Fade>

        <div className="subtitles_btn" >
                  
                   <Neaon1/>
                    </div> 
                   
                   
                    </div>)}

export default Scroll;
