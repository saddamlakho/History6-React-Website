import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import {Helmet} from 'react-helmet'




function BarbarosaEngSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div>
             <Helmet>
                <title>Barbarosa Eng Subtitles</title> 
             </Helmet>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
             
             <Fade top>
                 <h1>English Subtitles</h1>
             </Fade>

            <Fade left>
            <p  style={{marginTop: 200, padding: 100}}>
            Turkish historical drama serial Barbaros to be aired from September 9.

The first episode of the play will see a 30-minute continuous battle, the shooting of which was completed in a long period of two months.

Engin Altan, who played the lead role of Ertugrul Ghazi, has also played the lead role in Barbaros.

The shooting of the play Barbarossa took two months to complete.
            </p>
            </Fade>
        </div>
    )
}

export default BarbarosaEngSub;