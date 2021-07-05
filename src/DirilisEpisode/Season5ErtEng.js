import React, { useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import DirilisSeason5Pic from './DirilisSeason5Pic.jpg'







function Season5ErtEng() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div> 

                       <Helmet>
                <title>Dirilis Ertugrul Season 5 with English Subtitles</title> 
             </Helmet>
               <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                 {isMenuOpen && <Menu />}
          
                 <Fade top> <h1 style={{color: '#000', }} >Season 5</h1> </Fade>






            
                 <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 122
            <Link exact to="/dirilis-ertugrul-season5-english-subtitles-122">
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 122" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 123
            <Link exact to="/dirilis-ertugrul-season5-english-subtitles-123">

            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 123 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 124
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-124">
          
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 124 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 125
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-125">
            
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 125 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 126
            <Link exact to="/dirilis-ertugrul-season5-english-subtitles-126">
          
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 126" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 127
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-127">
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 127" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 128
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-128">
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 128" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 129
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-129">
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 129" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 130
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-130">
           
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 130" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 131
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-131">
         
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 131" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 132
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-132">
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 132" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 133
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-133">
         
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 133" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 134

             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-134">
          
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 134" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 135
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-135">

            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 135" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 136
             <Link exact to="/dirilis-ertugrul-season5-english-subtitles-136">
           
            <img className="article-img" src={DirilisSeason5Pic} alt="Episode 136" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 137
    <Link exact to="/dirilis-ertugrul-season5-english-subtitles-137">
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 137" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 138
    <Link exact to="/dirilis-ertugrul-season5-english-subtitles-138">

    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 138 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 139
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-139">
  
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 139 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 140
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-140">
    
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 140 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 141
    <Link exact to="/dirilis-ertugrul-season5-english-subtitles-141">
  
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 141" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 142
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-142">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 142" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 143
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-143">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 143" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 144
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-144">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 144" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 145
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-145">
   
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 145" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 146
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-146">
 
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 146" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 147
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-147">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 147" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 148
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-148">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 148" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 149
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-149">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 149" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 150
     <Link exact to="/dirilis-ertugrul-season5-english-subtitles-150">
   
    <img className="article-img" src={DirilisSeason5Pic} alt="Episode 150" />
  </Link>
   
    </h2>
  
</article>


</Fade>


</section>


      
           

        </div>
    )
}

export default Season5ErtEng;
