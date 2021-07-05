import React, { useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'
import KurulusPic2 from './KurulusPic2.jpg'
import { Link } from 'react-router-dom';


function Season2KurEngSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    return (
        <div>

             
        <Helmet>
        <title>Kurulus Osman Season 2 with English Subtitles</title> 
        </Helmet>


            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
          
               <Fade top> <h1 style={{color: '#000', }} >Season 2</h1> </Fade>
                  
              

             
    
           
               <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1 <sub>(28)</sub>
            <Link exact to="/kurulus-osman-season2-english-subtitles-1">
            <img className="article-img" src={KurulusPic2} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2 <sub>(29)</sub>
            <Link exact to="/kurulus-osman-season2-english-subtitles-2">

            <img className="article-img" src={KurulusPic2} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3 <sub>(30)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-3">
          
            <img className="article-img" src={KurulusPic2} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4 <sub>(31)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-4">
            
            <img className="article-img" src={KurulusPic2} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5 <sub>(32)</sub>
            <Link exact to="/kurulus-osman-season2-english-subtitles-5">
          
            <img className="article-img" src={KurulusPic2} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6 <sub>(33)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-6">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7 <sub>(34)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-7">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8 <sub>(35)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-8">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 9 <sub>(36)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-9">
           
           
            <img className="article-img" src={KurulusPic2} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 10 <sub>(37)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-10">
         
            <img className="article-img" src={KurulusPic2} alt="Episode 10" />
            </Link>
          
            </h2>
          
        </article>

        <article> 
             <h2> Episode 11 <sub>(38)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-11">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 12 <sub>(39)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-12">
         
            <img className="article-img" src={KurulusPic2} alt="Episode 12" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 13 <sub>(40)</sub>

             <Link exact to="/kurulus-osman-season2-english-subtitles-13">
          
            <img className="article-img" src={KurulusPic2} alt="Episode 13" />
          </Link>
         
            </h2>
          
        </article>

         <article> 
             <h2> Episode 14 <sub>(41)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-14">

            <img className="article-img" src={KurulusPic2} alt="Episode 14" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 15 <sub>(42)</sub>
             <Link exact to="/kurulus-osman-season2-english-subtitles-15">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 15" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 16 <sub>(43)</sub>
    <Link exact to="/kurulus-osman-season2-english-subtitles-16">
    <img className="article-img" src={KurulusPic2} alt="Episode 16" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 17 <sub>(44)</sub>
    <Link exact to="/kurulus-osman-season2-english-subtitles-17">

    <img className="article-img" src={KurulusPic2} alt="Episode 17 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 18  <sub>(45)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-18">
  
    <img className="article-img" src={KurulusPic2} alt="Episode 18 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 19 <sub>(46)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-19">
    
    <img className="article-img" src={KurulusPic2} alt="Episode 19 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 20 <sub>(47)</sub>
    <Link exact to="/kurulus-osman-season2-english-subtitles-20">
  
    <img className="article-img" src={KurulusPic2} alt="Episode 20" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 21 <sub>(48)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-21">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 21" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 22 <sub>(49)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-22">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 22" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 23 <sub>(50)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-23">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 23" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 24 <sub>(51)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-24">
   
   
    <img className="article-img" src={KurulusPic2} alt="Episode 24" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 25 <sub>(52)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-25">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 25" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 26 <sub>(53)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-26">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 26" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 27 <sub>(54)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-27">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 27" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade right>
<article>
     <h2> Episode 28 <sub>(55)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-28">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 28" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 29 <sub>(56)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-29">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 29" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 30 <sub>(57)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-30">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 30" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 31 <sub>(58)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-31">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 31" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 32 <sub>(59)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-32">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 32" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 33 <sub>(60)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-33">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 33" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade right>
<article>
     <h2> Episode 34 <sub>(61)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-34">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 34" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 35 <sub>(62)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-35">
   
    <img className="article-img" src={KurulusPic2} alt="Episode 35" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 36 <sub>(63)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-36">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 36" />
    </Link>
  
    </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 37 <sub>(64)</sub>
     <Link exact to="/kurulus-osman-season2-english-subtitles-37">
 
    <img className="article-img" src={KurulusPic2} alt="Episode 37" />
    </Link>
  
    </h2>
  
</article>


</Fade>
</section>



            
</div>
    )
}

export default Season2KurEngSub
