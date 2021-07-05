import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import {Helmet} from 'react-helmet'


function BarbarosaUrduSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
    
    <div>
            <Helmet>
                <title>Barbarosa Urdu Subtitles</title> 
             </Helmet>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
    

         
               <Fade top>
                 <h1>Urdu Subtitles</h1>
             </Fade>

            <Fade left>
            <p style={{marginTop: 200, padding: 100}}>ترک تاریخی ڈرامہ سیریل بابروس کو 9 ستمبر سے نشر کرنے کا اعلان۔

ڈرامے کی پہلی قسط میں 30 منٹ کی مسلسل لڑائی دیکھنے کو ملے گی جس کی شوٹنگ دو ماہ کے طویل عرصے میں مکمل کی گئ۔

ارطغرل غازی کا مرکزی کردار ادا کرنے والی انگین آلتان نے بابروس میں بھی مرکزی کردار ادا کیا ہے۔

باربروس ڈرامے کی شوٹنگ دو ماہ کے طویل عرصے میں مکمل ہوئی۔</p>
            </Fade>
        
            
     </div>
    )
}

export default BarbarosaUrduSub
