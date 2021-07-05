import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet'
import Skel from './Skel'


function JalalEpisode10() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      setTimeout( () => {
      setLoading(false);
      }, 3000);
    },  [])
   return (
        <div><Helmet>
        <title>Mendirman Jalolddin Episode 10 with English Subtitles</title> 
        </Helmet>
                   <h1>Episode 10</h1>
                   {
            
            loading ?
            
            <Skel/>

            :
<div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe  title="Episode 10" className="responsive-iframe" allowfullscreen="" frameborder="0"  id="videoarea" src="https://playhydrax.com/?v=naswDbdN5"  ></iframe>     

        </div>
}
        </div>
    )
}

export default JalalEpisode10
