import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import DirilisSeason4Pic from './DirilisSeason4Pic.jpg'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';



function Season4ErtEng() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

 
    return (
        <div>

            <Helmet>
                <title>Dirilis Ertugrul Season 4 with English Subtitles</title> 
             </Helmet>

            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                 {isMenuOpen && <Menu />}
          
                 <Fade top> <h1 style={{color: '#000', }} >Season 4</h1> </Fade>
                   

            
                 <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 92
            <Link exact to="/dirilis-ertugrul-season4-english-subtitles-92">
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 92" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 93
            <Link exact to="/dirilis-ertugrul-season4-english-subtitles-93">

            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 93 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 94
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-94">
          
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 94 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 95
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-95">
            
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 95 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 96
            <Link exact to="/dirilis-ertugrul-season4-english-subtitles-96">
          
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 96" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 97
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-97">
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 97" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 98
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-98">
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 98" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 99
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-99">
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 99" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 100
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-100">
           
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 100" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 101
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-101">
         
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 101" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 102
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-102">
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 102" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 103
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-103">
         
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 103" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 104

             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-104">
          
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 104" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 105
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-105">

            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 105" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 106
             <Link exact to="/dirilis-ertugrul-season4-english-subtitles-106">
           
            <img className="article-img" src={DirilisSeason4Pic} alt="Episode 106" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 107
    <Link exact to="/dirilis-ertugrul-season4-english-subtitles-107">
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 107" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 108
    <Link exact to="/dirilis-ertugrul-season4-english-subtitles-108">

    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 108 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 109
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-109">
  
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 109 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 110
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-110">
    
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 110 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 111
    <Link exact to="/dirilis-ertugrul-season4-english-subtitles-111">
  
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 111" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 112
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-112">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 112" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 113
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-113">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 113" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 114
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-114">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 114" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 115
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-115">
   
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 115" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 116
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-116">
 
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 116" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 117
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-117">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 117" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 118
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-118">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 118" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 119
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-119">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 119" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 120
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-120">
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 120" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 121
     <Link exact to="/dirilis-ertugrul-season4-english-subtitles-121">
   
   
    <img className="article-img" src={DirilisSeason4Pic} alt="Episode 121" />
  </Link>
   
    </h2>
  
</article>
</Fade>


</section>


    
        </div>
    )
}

export default Season4ErtEng
