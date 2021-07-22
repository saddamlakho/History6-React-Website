import React from 'react'
import './Button.css'

const Button = ({imp, text, link}) => {
    return (
        <div className={`button${imp ==='secondary' ? 'button_white' : ''}`} >
            <a href={link}>{text}
            </a>


    {/* //         <div className={`svg-wrapper${imp ==='secondary' ? 'button_white' : ''}`} >
    //   <svg height="40" width="150" xmlns="">
    //     <rect id="shape" height="40" width="150" />
    //     <div id="text">
    //       <a href={link}>{text}</a>
    //     </div>
    //   </svg>
    // </div> */}

       </div>
        
    )
}

export default Button;
