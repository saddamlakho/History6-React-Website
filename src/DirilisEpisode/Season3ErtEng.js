import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
import DirilisSeason3Pic from './DirilisSeason3Pic.jpg'


function Season3ErtEng() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  

    return (
        <div>

                 <Helmet>
                <title>Dirilis Ertugrul Season 3 with English Subtitles</title> 
             </Helmet>

             <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                 {isMenuOpen && <Menu />}
          
                 <Fade top> <h1 style={{color: '#000', }} >Season 3</h1> </Fade>
                  
           

   
                 <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 62
            <Link exact to="/dirilis-ertugrul-season3-english-subtitles-62">
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 62" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 63
            <Link exact to="/dirilis-ertugrul-season3-english-subtitles-63">

            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 63 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 64
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-64">
          
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 64 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 65
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-65">
            
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 65 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 66
            <Link exact to="/dirilis-ertugrul-season3-english-subtitles-66">
          
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 66" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 67
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-67">
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 67" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 68
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-68">
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 68" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 69
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-69">
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 69" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 70
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-70">
           
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 70" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 71
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-71">
         
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 71" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 72
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-72">
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 72" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 73
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-73">
         
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 73" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 74

             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-74">
          
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 74" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 75
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-75">

            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 75" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 76
             <Link exact to="/dirilis-ertugrul-season3-english-subtitles-76">
           
            <img className="article-img" src={DirilisSeason3Pic} alt="Episode 76" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 77
    <Link exact to="/dirilis-ertugrul-season3-english-subtitles-77">
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 77" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 78
    <Link exact to="/dirilis-ertugrul-season3-english-subtitles-78">

    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 78 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 79
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-79">
  
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 79 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 80
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-80">
    
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 80 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 81
    <Link exact to="/dirilis-ertugrul-season3-english-subtitles-81">
  
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 81" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 82
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-82">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 82" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 83
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-83">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 83" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 84
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-84">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 84" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 85
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-85">
   
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 85" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 86
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-86">
 
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 86" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 87
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-87">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 87" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 88
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-88">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 88" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 89
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-89">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 89" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 90
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-90">
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 90" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 91
     <Link exact to="/dirilis-ertugrul-season3-english-subtitles-91">
   
   
    <img className="article-img" src={DirilisSeason3Pic} alt="Episode 91" />
  </Link>
   
    </h2>
  
</article>
</Fade>


</section>

        </div>
        
    )
}

export default Season3ErtEng;
