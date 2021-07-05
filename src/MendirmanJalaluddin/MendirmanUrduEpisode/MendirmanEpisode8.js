import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from '../MendirmanEngEpisode/Skel'
function MendirmanEpisode8() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      setTimeout( () => {
      setLoading(false);
      }, 3000);
    },  [])

    return (
        <div>                <Helmet>
        <title>Mendirman Jalolddin Episode 8 with Urdu Subtitles</title> 
        </Helmet>
                       
                                   <h1>Episode 8</h1>
                                   {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe id="okru" title="Episode 8" className="responsive-iframe" src="https://vidmoly.to/embed-5p8rlr5n6icx.html" frameborder="0" allowfullscreen=""></iframe>   

        </div>
} 
        </div>
    )
}

export default MendirmanEpisode8
