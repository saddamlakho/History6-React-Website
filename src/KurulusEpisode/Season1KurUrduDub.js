import React, { useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import KurulusPic from './KurulusPic.jpg'



function Season1KurUrduDub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div>


        <Helmet>
        <title>Kurulus Osman Season 1 with Urdu Dubbing</title> 
        </Helmet>

              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
                    
               <Fade top> <h1 style={{color: '#000', alignItems: 'center'}} >Season 1</h1> </Fade>
                    
              
            
              <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1
            <Link exact to="/kurulus-osman-urdu-dubbing-1">
            <img className="article-img" src={KurulusPic} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2
            <Link exact to="/kurulus-osman-urdu-dubbing-2">

            <img className="article-img" src={KurulusPic} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3
             <Link exact to="/kurulus-osman-urdu-dubbing-3">
          
            <img className="article-img" src={KurulusPic} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4
             <Link exact to="/kurulus-osman-urdu-dubbing-4">
            
            <img className="article-img" src={KurulusPic} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5
            <Link exact to="/kurulus-osman-urdu-dubbing-5">
          
            <img className="article-img" src={KurulusPic} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6
             <Link exact to="/kurulus-osman-urdu-dubbing-6">
           
            <img className="article-img" src={KurulusPic} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7
             <Link exact to="/kurulus-osman-urdu-dubbing-7">
           
            <img className="article-img" src={KurulusPic} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8
             <Link exact to="/kurulus-osman-urdu-dubbing-8">
           
            <img className="article-img" src={KurulusPic} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 9
             <Link exact to="/kurulus-osman-urdu-dubbing-9">
           
           
            <img className="article-img" src={KurulusPic} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 10
             <Link exact to="/kurulus-osman-urdu-dubbing-10">
         
            <img className="article-img" src={KurulusPic} alt="Episode 10" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 11
             <Link exact to="/kurulus-osman-urdu-dubbing-11">
           
            <img className="article-img" src={KurulusPic} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 12
             <Link exact to="/kurulus-osman-urdu-dubbing-12">
         
            <img className="article-img" src={KurulusPic} alt="Episode 12" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 13

             <Link exact to="/kurulus-osman-urdu-dubbing-13">
          
            <img className="article-img" src={KurulusPic} alt="Episode 13" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 14
             <Link exact to="/kurulus-osman-urdu-dubbing-14">

            <img className="article-img" src={KurulusPic} alt="Episode 14" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 15
             <Link exact to="/kurulus-osman-urdu-dubbing-15">
           
            <img className="article-img" src={KurulusPic} alt="Episode 15" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 16
    <Link exact to="/kurulus-osman-urdu-dubbing-16">
    <img className="article-img" src={KurulusPic} alt="Episode 16" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 17
    <Link exact to="/kurulus-osman-urdu-dubbing-17">

    <img className="article-img" src={KurulusPic} alt="Episode 17 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 18
     <Link exact to="/kurulus-osman-urdu-dubbing-18">
  
    <img className="article-img" src={KurulusPic} alt="Episode 18 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 19
     <Link exact to="/kurulus-osman-urdu-dubbing-19">
    
    <img className="article-img" src={KurulusPic} alt="Episode 19 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 20
    <Link exact to="/kurulus-osman-urdu-dubbing-20">
  
    <img className="article-img" src={KurulusPic} alt="Episode 20" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 21
     <Link exact to="/kurulus-osman-urdu-dubbing-21">
   
    <img className="article-img" src={KurulusPic} alt="Episode 21" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 22
     <Link exact to="/kurulus-osman-urdu-dubbing-22">
   
    <img className="article-img" src={KurulusPic} alt="Episode 22" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 23
     <Link exact to="/kurulus-osman-urdu-dubbing-23">
   
    <img className="article-img" src={KurulusPic} alt="Episode 23" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 24
     <Link exact to="/kurulus-osman-urdu-dubbing-24">
   
   
    <img className="article-img" src={KurulusPic} alt="Episode 24" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 25
     <Link exact to="/kurulus-osman-urdu-dubbing-25">
 
    <img className="article-img" src={KurulusPic} alt="Episode 25" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 26
     <Link exact to="/kurulus-osman-urdu-dubbing-26">
   
    <img className="article-img" src={KurulusPic} alt="Episode 26" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 27
     <Link exact to="/kurulus-osman-urdu-dubbing-27">
 
    <img className="article-img" src={KurulusPic} alt="Episode 27" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade right>
<article>
     <h2> Episode 28

     <Link exact to="/kurulus-osman-urdu-dubbing-28">
  
    <img className="article-img" src={KurulusPic} alt="Episode 28" />
  </Link>
 
    </h2>
  
</article>

 <article>
     <h2> Episode 29
     <Link exact to="/kurulus-osman-urdu-dubbing-29">

    <img className="article-img" src={KurulusPic} alt="Episode 29" />
  </Link>
   
    </h2>

  
</article>

 <article>
     <h2> Episode 30
     <Link exact to="/kurulus-osman-urdu-dubbing-30">
   
    <img className="article-img" src={KurulusPic} alt="Episode 30" />
    </Link>
  
    </h2>
  
</article>
   
 </Fade> 

 <Fade left>
<article>
     <h2> Episode 31

     <Link exact to="/kurulus-osman-urdu-dubbing-31">
  
    <img className="article-img" src={KurulusPic} alt="Episode 31" />
  </Link>
 
    </h2>
  
</article>

 <article>
     <h2> Episode 32
     <Link exact to="/kurulus-osman-urdu-dubbing-32">

    <img className="article-img" src={KurulusPic} alt="Episode 32" />
  </Link>
   
    </h2>

  
</article>

 <article>
     <h2> Episode 33
     <Link exact to="/kurulus-osman-urdu-dubbing-33">
   
    <img className="article-img" src={KurulusPic} alt="Episode 33" />
    </Link>
  
    </h2>
  
</article>
   
 </Fade> 
 <Fade right>

 <article>
     <h2> Episode 34
     <Link exact to="/kurulus-osman-urdu-dubbing-34">
   
    <img className="article-img" src={KurulusPic} alt="Episode 34" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 35
     <Link exact to="/kurulus-osman-urdu-dubbing-35">
   
    <img className="article-img" src={KurulusPic} alt="Episode 35" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 36
     <Link exact to="/kurulus-osman-urdu-dubbing-36">
   
    <img className="article-img" src={KurulusPic} alt="Episode 36" />
    </Link>
  
    </h2>
  
</article>
            
 </Fade>
       

 <Fade left>

 <article>
     <h2> Episode 37
     <Link exact to="/kurulus-osman-urdu-dubbing-37">
   
    <img className="article-img" src={KurulusPic} alt="Episode 37" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 38
     <Link exact to="/kurulus-osman-urdu-dubbing-38">
   
    <img className="article-img" src={KurulusPic} alt="Episode 38" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 39
     <Link exact to="/kurulus-osman-urdu-dubbing-39">
   
    <img className="article-img" src={KurulusPic} alt="Episode 39" />
    </Link>
  
    </h2>
  
</article>
            
 </Fade>
       
 <Fade right>

<article>
    <h2> Episode 40
    <Link exact to="/kurulus-osman-urdu-dubbing-40">
  
   <img className="article-img" src={KurulusPic} alt="Episode 40" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 41
    <Link exact to="/kurulus-osman-urdu-dubbing-41">
  
   <img className="article-img" src={KurulusPic} alt="Episode 41" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 42
    <Link exact to="/kurulus-osman-urdu-dubbing-42">
  
   <img className="article-img" src={KurulusPic} alt="Episode 42" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      

<Fade left>

<article>
    <h2> Episode 43
    <Link exact to="/kurulus-osman-urdu-dubbing-43">
  
   <img className="article-img" src={KurulusPic} alt="Episode 43" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 44
    <Link exact to="/kurulus-osman-urdu-dubbing-44">
  
   <img className="article-img" src={KurulusPic} alt="Episode 44" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 45
    <Link exact to="/kurulus-osman-urdu-dubbing-45">
  
   <img className="article-img" src={KurulusPic} alt="Episode 45" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      



<Fade right>

<article>
    <h2> Episode 46
    <Link exact to="/kurulus-osman-urdu-dubbing-46">
  
   <img className="article-img" src={KurulusPic} alt="Episode 46" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 47
    <Link exact to="/kurulus-osman-urdu-dubbing-47">
  
   <img className="article-img" src={KurulusPic} alt="Episode 47" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 48
    <Link exact to="/kurulus-osman-urdu-dubbing-48">
  
   <img className="article-img" src={KurulusPic} alt="Episode 48" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      

<Fade left>

<article>
    <h2> Episode 49
    <Link exact to="/kurulus-osman-urdu-dubbing-49">
  
   <img className="article-img" src={KurulusPic} alt="Episode 49" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 50
    <Link exact to="/kurulus-osman-urdu-dubbing-50">
  
   <img className="article-img" src={KurulusPic} alt="Episode 50" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 51
    <Link exact to="/kurulus-osman-urdu-dubbing-51">
  
   <img className="article-img" src={KurulusPic} alt="Episode 51" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>

<Fade right>

<article>
    <h2> Episode 52
    <Link exact to="/kurulus-osman-urdu-dubbing-52">
  
   <img className="article-img" src={KurulusPic} alt="Episode 52" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 53
    <Link exact to="/kurulus-osman-urdu-dubbing-53">
  
   <img className="article-img" src={KurulusPic} alt="Episode 53" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 54
    <Link exact to="/kurulus-osman-urdu-dubbing-54">
  
   <img className="article-img" src={KurulusPic} alt="Episode 54" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      

<Fade left>

<article>
    <h2> Episode 55
    <Link exact to="/kurulus-osman-urdu-dubbing-55">
  
   <img className="article-img" src={KurulusPic} alt="Episode 55" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 56
    <Link exact to="/kurulus-osman-urdu-dubbing-56">
  
   <img className="article-img" src={KurulusPic} alt="Episode 56" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 57
    <Link exact to="/kurulus-osman-urdu-dubbing-57">
  
   <img className="article-img" src={KurulusPic} alt="Episode 57" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>


<Fade right>

<article>
    <h2> Episode 58
    <Link exact to="/kurulus-osman-urdu-dubbing-58">
  
   <img className="article-img" src={KurulusPic} alt="Episode 58" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 59
    <Link exact to="/kurulus-osman-urdu-dubbing-59">
  
   <img className="article-img" src={KurulusPic} alt="Episode 59" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 60
    <Link exact to="/kurulus-osman-urdu-dubbing-60">
  
   <img className="article-img" src={KurulusPic} alt="Episode 60" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      

<Fade left>

<article>
    <h2> Episode 61
    <Link exact to="/kurulus-osman-urdu-dubbing-61">
  
   <img className="article-img" src={KurulusPic} alt="Episode 61" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 62
    <Link exact to="/kurulus-osman-urdu-dubbing-62">
  
   <img className="article-img" src={KurulusPic} alt="Episode 62" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 63
    <Link exact to="/kurulus-osman-urdu-dubbing-63">
  
   <img className="article-img" src={KurulusPic} alt="Episode 63" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>

<Fade right>

<article>
    <h2> Episode 64
    <Link exact to="/kurulus-osman-urdu-dubbing-64">
  
   <img className="article-img" src={KurulusPic} alt="Episode 64" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 65
    <Link exact to="/kurulus-osman-urdu-dubbing-65">
  
   <img className="article-img" src={KurulusPic} alt="Episode 65" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 66
    <Link exact to="/kurulus-osman-urdu-dubbing-66">
  
   <img className="article-img" src={KurulusPic} alt="Episode 66" />
   </Link>
 
   </h2>
 
</article>
           
</Fade>
      

<Fade left>

<article>
    <h2> Episode 67
    <Link exact to="/kurulus-osman-urdu-dubbing-67">
  
   <img className="article-img" src={KurulusPic} alt="Episode 67" />
   </Link>
 
   </h2>
 
</article>

<article>
    <h2> Episode 68
    <Link exact to="/kurulus-osman-urdu-dubbing-68">
  
   <img className="article-img" src={KurulusPic} alt="Episode 68" />
   </Link>
 
   </h2>
 
</article>


           
</Fade>





       </section>




        </div>
    )
}

export default Season1KurUrduDub;
