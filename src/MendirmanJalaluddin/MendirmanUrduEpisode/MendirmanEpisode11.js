import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from '../MendirmanEngEpisode/Skel'
function MendirmanEpisode11() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      setTimeout( () => {
      setLoading(false);
      }, 3000);
    },  [])
  return (
        <div>  <Helmet>
        <title>Mendirman Jalolddin Episode 11 with Urdu Subtitles</title> 
        </Helmet>
                                              <h1>Episode 11</h1>
                                              {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe id="okru" title="Episode 11" className="responsive-iframe" src="//vidmoly.to/embed-g6b01tf3py5p.html" frameborder="0" allowfullscreen=""></iframe>   

        </div>
} 
        </div>
    )
}

export default MendirmanEpisode11
