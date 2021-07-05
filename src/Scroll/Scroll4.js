import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Neaon4 from '../Neaon/Neaon4'



const Scroll4 = ({title, backgroungImg,link}) => {
    return (
      
        <div className="item" style={{  
         backgroundImage: `url( ${backgroungImg}  )`}}>
            <Bounce  bottom>
          <h1 style={{marginTop: 40, color: 'white' }} >{title}</h1>
           </Bounce >
         
           <div className="subtitles_btn" >
            <Neaon4/>
         </div> 
        
        </div>
    )
}

export default Scroll4;








