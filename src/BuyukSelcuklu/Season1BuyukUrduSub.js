import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import BuyukSelcukluPic from './BuyukPic.jpg'





function Season1BuyukUrduSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

 
    return (
        <div>

<Helmet>
        <title>Buyuk Selcuklu Series with Urdu Subtitles</title> 
        </Helmet>
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}

               <Fade top> <h1 style={{color: '#000', }} >Buyuk Selcuklu</h1> </Fade>
            



              


               
               <section className="cards">
      <Fade left>

        <article>
            <h2> Episode 1
            <Link exact to="/buyuk-selcuklu-urdu-sub-episode-1">
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 1" />
            </Link>
            </h2>
         
        </article>
        <article>
            <h2> Episode 2
            <Link exact to="/buyuk-selcuklu-urdu-sub-episode-2">

            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 2 " />
          </Link>
            
             </h2>
         
        </article>
        <article>
             <h2> Episode 3
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-3">
          
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 3 " />
          </Link>
            
             </h2>
          
        </article>
        </Fade>
        <Fade right>
        <article>
             <h2> Episode 4
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-4">
            
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 4 " />
          </Link>
           
             </h2>
          
        </article>
        <article>
            <h2> Episode 5
            <Link exact to="/buyuk-selcuklu-urdu-sub-episode-5">
          
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 5" />
          </Link>
           
            </h2>
         
        </article>
        <article>
             <h2> Episode 6
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-6">
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 6" />
          </Link>
           
            </h2>
          
        </article>
        </Fade>
        <Fade left>
        <article>
             <h2> Episode 7
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-7">
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 7" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 8
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-8">
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 8" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 9
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-9">
           
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 9" />
          </Link>
           
            </h2>
          
        </article>
      </Fade>

      <Fade right>
        <article>
             <h2> Episode 10
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-10">
         
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 10" />
            </Link>
          
            </h2>
          
        </article>

        <article>
             <h2> Episode 11
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-11">
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 11" />
          </Link>
           
            </h2>
          
        </article>

        <article>
             <h2> Episode 12
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-12">
         
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 12" />
            </Link>
          
            </h2>
          
        </article>
        </Fade>
        
        <Fade left>
        <article>
             <h2> Episode 13

             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-13">
          
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 13" />
          </Link>
         
            </h2>
          
        </article>

         <article>
             <h2> Episode 14
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-14">

            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 14" />
          </Link>
           
            </h2>

          
        </article>

         <article>
             <h2> Episode 15
             <Link exact to="/buyuk-selcuklu-urdu-sub-episode-15">
           
            <img className="article-img" src={BuyukSelcukluPic} alt="Episode 15" />
            </Link>
          
            </h2>
          
        </article>
           
         </Fade> 

         <Fade right>

    <article>
    <h2> Episode 16
    <Link exact to="/buyuk-selcuklu-urdu-sub-episode-16">
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 16" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 17
    <Link exact to="/buyuk-selcuklu-urdu-sub-episode-17">

    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 17 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 18
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-18">
  
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 18 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 19
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-19">
    
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 19 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 20
    <Link exact to="/buyuk-selcuklu-urdu-sub-episode-20">
  
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 20" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 21
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-21">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 21" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 22
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-22">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 22" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 23
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-23">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 23" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 24
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-24">
   
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 24" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 25
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-25">
 
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 25" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 26
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-26">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 26" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 27
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-27">
 
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 27" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade right>
<article>
     <h2> Episode 28

     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-28">
  
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 28" />
  </Link>
 
    </h2>
  
</article>

 <article>
     <h2> Episode 29
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-29">

    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 29" />
  </Link>
   
    </h2>

  
</article>

 <article>
     <h2> Episode 30
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-30">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 30" />
    </Link>
  
    </h2>
  
</article>
   
 </Fade> 

 <Fade left>
<article>
     <h2> Episode 31

     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-31">
  
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 31" />
  </Link>
 
    </h2>
  
</article>

 <article>
     <h2> Episode 32
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-32">

    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 32" />
  </Link>
   
    </h2>

  
</article>

 <article>
     <h2> Episode 33
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-33">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 33" />
    </Link>
  
    </h2>
  
</article>
   
 </Fade> 
 <Fade right>

 <article>
     <h2> Episode 34
     <Link exact to="/buyuk-selcuklu-urdu-sub-episode-34">
   
    <img className="article-img" src={BuyukSelcukluPic} alt="Episode 34" />
    </Link>
  
    </h2>
  
</article>


 </Fade>
       
      </section>














{/* 
               <div className="row">
              <div className="column">
                    <div className="card">
                        <h3>Episode 1</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1892270803525" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                       
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 2</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2394085329477" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 3</h3>
                        <div className="iframe-container" >
                        <iframe  id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1907126635077" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>

                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 4</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1918998284869" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>               
                             </div>
                </div>
               </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 5</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1931640113733"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 6</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1947595704901"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 7</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1965576686149" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                     
                            </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 8</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1982662642245" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 9</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2007746480709" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 10</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2025029831237" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 11</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/2048434375237" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 12</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2066373478981" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 13</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2087288834629" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 14</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2109169928773" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 15</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2128786885189"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 16</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/2150121867845" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>              
                              </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 17</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2167751641669" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 18</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2187770268229" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 19</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/2206868245061" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 20</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2225659382341"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 21</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2239582898757"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 22</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2253584796229"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 23</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2265699584581" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 24</h3>
                        <div className="iframe-container" >

                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2279801031237" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card">
                        <h3>Episode 25</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2290706549317" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 26</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2323864357445"   frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div> 
              
           

                <div className="column">
                    <div className="card">
                        <h3>Episode 27</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2338096220741" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 28</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2353963141701" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 29</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2385875831365"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 30</h3>
                        <div className="iframe-container" >
                          
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2403526838853" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card">
                        <h3>Episode 31</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/2420408781381" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                  
                          </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 32</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/2435907390021" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div> 

                <div className="column">
                    <div className="card">
                        <h3>Episode 33</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/2452108741189" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div> 


               

           </div>  */}
            
            
        </div>
    )
}

export default Season1BuyukUrduSub
