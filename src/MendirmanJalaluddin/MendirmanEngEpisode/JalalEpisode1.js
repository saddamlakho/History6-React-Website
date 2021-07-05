import React, { useEffect, useState } from 'react';
import './JalalEpisode.css'
import {Helmet} from 'react-helmet'
import Skel from './Skel'



function JalalEpisode1() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      setTimeout( () => {
      setLoading(false);
      }, 3000);
    },  [])
  
    return (
        <div>
          
            <Helmet>
            <title>Mendirman Jalolddin Episode 1 with English Subtitles</title> 
           </Helmet>




        

         <h1>Episode 1</h1>
           {
            
            loading ?
            
            <Skel/>

            :
               
         <div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 
         <iframe  title="Episode 1" className="responsive-iframe" allowfullscreen="" frameborder="0"   id="videoarea" src="https://playhydrax.com/?v=UXZBZp4rh"  ></iframe>     

        </div>
          
         }
          
        </div>
    )
}

export default JalalEpisode1