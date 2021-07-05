import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from '../MendirmanEngEpisode/Skel'

function MendirmanEpisode1() {
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
        <title>Mendirman Jalolddin Episode 1 with Urdu Subtitles</title> 
        </Helmet>
        
     
        
               <h1>Episode 1</h1>
               {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe id="okru" title="Episode 1" className="responsive-iframe" src="https://vidmoly.to/embed-4v4uqalkafzx.html" frameborder="0" allowfullscreen=""></iframe>   

        </div>
} 
        </div>
    )
}

export default MendirmanEpisode1
