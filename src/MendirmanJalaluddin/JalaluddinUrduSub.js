import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import Header from '../Header/Header'
import Menu from '../Header/Menu'
import Fade from 'react-reveal/Fade';
import JalalPic from './JalaluddinPic.jpg'
import { Link } from 'react-router-dom';



function JalaluddinUrduSub() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
 
 

    return (
        <div>
                 <Helmet>
        <title>Mendirman Jalolddin Series in Urdu Subtitles</title> 
        </Helmet>  
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                 {isMenuOpen && <Menu />}
               <Fade top> <h1 style={{color: '#000', }} >Medirman Jalal ud din</h1> </Fade>




             
               <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1
            <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-1">
            <img className="article-img" src={JalalPic} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2
            <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-2">

            <img className="article-img" src={JalalPic} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-3">
          
            <img className="article-img" src={JalalPic} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-4">
            
            <img className="article-img" src={JalalPic} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5
            <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-5">
          
            <img className="article-img" src={JalalPic} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-6">
           
            <img className="article-img" src={JalalPic} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-7">
           
            <img className="article-img" src={JalalPic} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-8">
           
            <img className="article-img" src={JalalPic} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 9
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-9">
           
           
            <img className="article-img" src={JalalPic} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 10
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-10">
         
            <img className="article-img" src={JalalPic} alt="Episode 10" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 11
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-11">
           
            <img className="article-img" src={JalalPic} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 12
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-12">
         
            <img className="article-img" src={JalalPic} alt="Episode 12" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade right>
        <article>
             <h2> Episode 13
             <Link exact to="/mendirman-jalal-ud-din-urdu-sub-episode-13">
          
            <img className="article-img" src={JalalPic} alt="Episode 13" />
          </Link>
            </h2>
          
        </article>

        {/* <article>
             <h2> Episode 14
            <img className="article-img" src={JalalPic} alt="Episode 14" />
            </h2>
          
        </article> */}

        {/* <article>
             <h2> Episode 15
            <img className="article-img" src={JalalPic} alt="Episode 15" />
            </h2>
          
        </article>
           */}
         </Fade> 
       
      </section>




           
          
        </div>
    )
}

export default JalaluddinUrduSub
