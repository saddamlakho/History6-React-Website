import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'


function Deliler() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>

             <Helmet>
            <title>Deliler Complete Movie with English Subtitles</title> 
            </Helmet>

             <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}


               <Fade top> <h1 style={{color: '#000', }} >Deliler</h1> </Fade>
              
               <div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

<iframe id="okru" title="Deliler"  className="responsive-iframe" src="//ok.ru/videoembed/2337295960783" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                                

    </div>

               

        </div>
    )
}

export default Deliler