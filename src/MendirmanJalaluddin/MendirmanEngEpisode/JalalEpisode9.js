import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from './Skel'


function JalalEpisode9() {
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
        <title>Mendirman Jalolddin Episode 9 with English Subtitles</title> 
        </Helmet>   <h1>Episode 9</h1>
        {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe  title="Episode 9" className="responsive-iframe" allowfullscreen="" frameborder="0"  id="videoarea" src="https://playhydrax.com/?v=Xcn4_WW33" ></iframe>     

        </div>
}
        </div>
    )
}

export default JalalEpisode9
