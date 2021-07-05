import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from './Skel'


function JalalEpisode11() {
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
        <title>Mendirman Jalolddin Episode 11 with English Subtitles</title> 
        </Helmet>             <h1>Episode 11</h1>
        {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe  title="Episode 11" className="responsive-iframe" allowfullscreen="" frameborder="0"  id="videoarea"src="https://playhydrax.com/?v=rFnwqwkR3" ></iframe>     

        </div>
}
        </div>
    )
}

export default JalalEpisode11
