import React from 'react'
import Fade from 'react-reveal/Fade';
import './Scroll.css'
// import Button from '../Buttons/Button'
import Neaon00 from '../Neaon/Neaon00'




const Scroll00 = ({title,title2, backgroungImg, link,leftBtnText,leftBtnLink,rightBtnText,rightBtnLink,twoButtons}) => {
    return (
      
        <div className="item" style={{  
         backgroundImage: `url( ${backgroungImg}  )`}}>
          
            <Fade left>
         <h1>{title}</h1>
          
          </Fade>

        <div className="subtitles_btn" >
                     <Neaon00/> 
                  </div> 
              
               </div>)}

export default Scroll00;