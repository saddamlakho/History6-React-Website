import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Neaon3 from '../Neaon/Neaon3'




const Scroll3 = ({title, backgroungImg}) => {
    return (
      
        <div className="item" style={{  
         backgroundImage: `url( ${backgroungImg}  )`}}>
            <Bounce  bottom>
          <h1 style={{marginTop: 40, color: 'white' }} >{title}</h1>
           </Bounce >
           <div className="subtitles_btn" >
                   <Neaon3/>
         </div> 

        </div>
        
    )
}

export default Scroll3;