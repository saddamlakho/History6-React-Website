import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'



function DelilerUrdu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>

            <Helmet>
            <title>Deliler Complete Movie with Urdu Subtitles</title> 
            </Helmet>

             <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}


               <Fade top> <h1 style={{color: '#000', }} >Deliler</h1> </Fade>

               <h1>Part 1 </h1>
      <div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

    <iframe id="okru" title="Deliler"  className="responsive-iframe"  src="https://www.dailymotion.com/embed/video/x82fm3k?autoplay=1"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       

        </div> 

        <h1>Part 2 </h1>
      <div style={{ paddingTop: "56.25%", width: "100%", overflow: 'hidden', position: 'relative' }} > 

    <iframe id="okru" title="Deliler" className="responsive-iframe" src="https://www.dailymotion.com/embed/video/x82fma8?autoplay=1" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       

        </div> 

          
        </div>
    )
}

export default DelilerUrdu
