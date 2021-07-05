import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import DirilisSeason2Pic from './DirilisSeason2Pic.jpg'
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'


function Season2ErtEng() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <div>

              <Helmet>
                <title>Dirilis Ertugrul Season 2 with English Subtitles</title> 
             </Helmet>
               <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                 {isMenuOpen && <Menu />}

                 <Fade top> <h1 style={{color: '#000', }} >Season 2</h1> </Fade>



    
                 <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 27
            <Link exact to="/dirilis-ertugrul-season2-english-subtitles-27">
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 27" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 28
            <Link exact to="/dirilis-ertugrul-season2-english-subtitles-28">

            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 28 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 29
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-29">
          
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 29 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 30
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-30">
            
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 30 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 31
            <Link exact to="/dirilis-ertugrul-season2-english-subtitles-31">
          
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 31" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 32
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-32">
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 32" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 33
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-33">
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 33" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 34
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-34">
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 34" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 35
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-35">
           
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 35" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 36
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-36">
         
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 36" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 37
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-37">
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 37" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 38
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-38">
         
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 38" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 39

             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-39">
          
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 39" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 40
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-40">

            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 40" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 41
             <Link exact to="/dirilis-ertugrul-season2-english-subtitles-41">
           
            <img className="article-img" src={DirilisSeason2Pic} alt="Episode 41" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 42
    <Link exact to="/dirilis-ertugrul-season2-english-subtitles-42">
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 42" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 43
    <Link exact to="/dirilis-ertugrul-season2-english-subtitles-43">

    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 43 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 44
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-44">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 44 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 45
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-45">
    
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 45 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 46
    <Link exact to="/dirilis-ertugrul-season2-english-subtitles-46">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 46" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 47
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-47">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 47" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 48
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-48">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 48" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 49
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-49">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 49" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 50
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-50">
   
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 50" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 51
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-51">
 
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 51" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 52
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-52">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 52" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 53
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-53">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 53" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 54
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-54">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 54" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 55
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-55">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 55" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 56
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-56">
   
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 56" />
  </Link>
   
    </h2>
  
</article>
</Fade>





<Fade left>
<article>
     <h2> Episode 57
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-57">
 
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 57" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 58
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-58">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 58" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 59
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-59">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 59" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 60
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-60">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 60" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 61
     <Link exact to="/dirilis-ertugrul-season2-english-subtitles-61">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 61" />
  </Link>
   
    </h2>
  
</article>

</Fade>


</section>


        </div>
    )
}

export default Season2ErtEng
