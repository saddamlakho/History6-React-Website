import React, {  useState } from 'react';
import Fade from 'react-reveal/Fade';
import './SecondPage.css'
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import DirilisSeason1Pic from './DirilisSeason1Pic.jpg'




function Season1ErtEng() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
    return (
        <div>
            <Helmet>
                <title>Dirilis Ertugrul Season 1 with English Subtitles</title> 
             </Helmet>

       <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}

      <Fade top> <h1 style={{color: '#000', }} >Season 1</h1> </Fade>
     
      
       
       
      <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1
            <Link exact to="/dirilis-ertugrul-season1-english-subtitles-1">
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2
            <Link exact to="/dirilis-ertugrul-season1-english-subtitles-2">

            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-3">
          
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-4">
            
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5
            <Link exact to="/dirilis-ertugrul-season1-english-subtitles-5">
          
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-6">
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-7">
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-8">
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 9
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-9">
           
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 10
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-10">
         
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 10" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 11
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-11">
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 12
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-12">
         
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 12" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 13

             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-13">
          
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 13" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 14
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-14">

            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 14" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 15
             <Link exact to="/dirilis-ertugrul-season1-english-subtitles-15">
           
            <img className="article-img" src={DirilisSeason1Pic} alt="Episode 15" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 16
    <Link exact to="/dirilis-ertugrul-season1-english-subtitles-16">
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 16" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 17
    <Link exact to="/dirilis-ertugrul-season1-english-subtitles-17">

    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 17 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 18
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-18">
  
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 18 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 19
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-19">
    
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 19 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 20
    <Link exact to="/dirilis-ertugrul-season1-english-subtitles-20">
  
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 20" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 21
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-21">
   
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 21" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 22
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-22">
   
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 22" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 23
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-23">
   
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 23" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 24
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-24">
   
   
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 24" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 25
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-25">
 
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 25" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 26
     <Link exact to="/dirilis-ertugrul-season1-english-subtitles-26">
   
    <img className="article-img" src={DirilisSeason1Pic} alt="Episode 26" />
  </Link>
   
    </h2>
  
</article>


</Fade>

</section>

        </div>

    )
}

export default Season1ErtEng;
