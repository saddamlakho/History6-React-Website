import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import KurulusPic2 from './KurulusPic2.jpg'

function Season2KurUrduDub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
              <Helmet>
        <title>Kurulus Osman Season 2 with Urdu Dubbing</title> 
        </Helmet>

            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
           
               <Fade top> <h1 style={{color: '#000', alignItems: 'center'}} >Season 1</h1> </Fade>





               <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1
            <Link exact to="/kurulus-osman-season2-urdu-dubbing-1">
            <img className="article-img" src={KurulusPic2} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2
            <Link exact to="/kurulus-osman-season2-urdu-dubbing-2">

            <img className="article-img" src={KurulusPic2} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-3">
          
            <img className="article-img" src={KurulusPic2} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-4">
            
            <img className="article-img" src={KurulusPic2} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5
            <Link exact to="/kurulus-osman-season2-urdu-dubbing-5">
          
            <img className="article-img" src={KurulusPic2} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-6">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-7">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-8">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>
        
        <article>
             <h2> Episode 9
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-9">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
                   
</Fade>
<Fade right>


<article>
             <h2> Episode 10
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-10">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 10" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 11
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-11">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

         <article>
             <h2> Episode 12
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-12">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 12" />
          </Link>
           
            </h2>
          
        </article>

</Fade>

<Fade left>
         <article>
          <h2> Episode 13
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-13">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 13" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 14
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-14">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 14" />
          </Link>
           
            </h2>
          
        </article>

           <article>
             <h2> Episode 15
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-15">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 15" />
          </Link>
           
            </h2>
          
        </article>  


</Fade>



<Fade right>
         <article>
          <h2> Episode 16
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-16">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 16" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 17
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-17">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 17" />
          </Link>
           
            </h2>
          
        </article>

            <article>
             <h2> Episode 18
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-18">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 18" />
          </Link>
           
            </h2>
          
        </article>  


</Fade>

{/* <Fade left>
         <article>
          <h2> Episode 19
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-19">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 19" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 20
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-20">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 20" />
          </Link>
           
            </h2>
          
        </article>

           <article>
             <h2> Episode 21
             <Link exact to="/kurulus-osman-season2-urdu-dubbing-21">
           
            <img className="article-img" src={KurulusPic2} alt="Episode 21" />
          </Link>
           
            </h2>
          
        </article>   


</Fade>
 */}



</section>

    
        </div>
    )
}

export default Season2KurUrduDub
