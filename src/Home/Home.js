import React, { useState } from 'react';
import Header from '../Header/Header'
import Osman from '../assets/Osman.jpg'
import BuyukSelcuklu from '../assets/BuyukSelcuklu.jpg'
import Jalaluddin from '../assets/Jalaluddin.jpeg'
import Ertugrul from '../assets/Ertugrul.jpg'
import Barbarosa from '../assets/Barbarosa.jpg'
// import Item from '../Item/Item';
import Scroll00 from '../Scroll/Scroll00'
import Scroll from '../Scroll/Scroll'
import Scroll2 from '../Scroll/Scroll2'
import Scroll3 from '../Scroll/Scroll3'
import Scroll4 from '../Scroll/Scroll4'
// import Second from '../SecondPage/Second'
import Menu from '../Header/Menu'
import {Helmet} from 'react-helmet'
import Footer from '../Footer/Footer'




function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    
    
    
    
    return (
      
 
      
      <div >
  
       <Helmet>
         <title>
           Dirilis Ertugrul in Urdu English Kurulus Osman in Urdu
           English
         </title>
         <meta name="description" content="Watch Turkish Series Dirilis Ertugrul Kurulus Osman Buyuk Selcuklu Mendirman Jaloluddin and Turkish Movies with Urdu Subtitles and  English Subtitles Without any Problem visit www.history6.com" />

         <meta name="keywords" content="Kurulus Osman Buyuk Selcuklu Dirilis Ertugrul Mendirman Jaloluddin Geliyor Tukler Geliyor" />
         <link rel="canonical" href="https://history6.com/" />
       </Helmet>
     
       <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
          <div className="app_itemContainer" >
            
           <Scroll00
             title="Barbarosa "
             backgroungImg={Barbarosa}
           /> 
     
           
           <Scroll
            title="Dirilis Ertugrul "
             backgroungImg={Ertugrul}
           />

           <Scroll2 
           title="Kurulus Osman" 
           backgroungImg={Osman}
           />
  
          <Scroll3 
           title="Buyuk Selcuklu" 
           backgroungImg={BuyukSelcuklu}
           />
  
          <Scroll4 
           title="Medirman Jalal ud din" 
           backgroungImg={Jalaluddin}
            /> 
            <Footer/>
           
          {/* <Item className="item_page" /> */}
           <div>
          
           </div>
            </div> 
        
        
        

           
        </div>
      
   




    );
  }

export default Home;
