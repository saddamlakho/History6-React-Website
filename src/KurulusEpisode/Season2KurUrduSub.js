import React, { useEffect, useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import SkeletonsElements from '../Skeletons/SkeletonsElements'



function Season2KurUrduSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout( () => {
    setLoading(false);
    }, 3000);
  },  [])

    return (
        <div>
            
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}


               <Fade top> <h1 style={{color: '#000', alignItems: 'center'}} >Season 2</h1> </Fade>
                     
      
                 {
            
            loading ?
            
            <SkeletonsElements/>

            :


                     <div className="row">
              <div className="column">
                    <div className="card">
                        <h3>Episode 1 <sub>(28)</sub>  </h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2329563433667" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 2 <sub>(29)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2329938692803" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 3 <sub>(30)</sub> </h3>
                        <div className="iframe-container" >
                        <iframe  id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2495704861253" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>

            


                <div className="column">
                    <div className="card">
                        <h3>Episode 4 <sub>(31)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330191334083" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                </div>
               </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 5 <sub>(32)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330143296195" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 6 <sub>(33)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2346675276483" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 7 <sub>(34)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"  src="//ok.ru/videoembed/2307212774014" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 8 <sub>(35)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2320658467523" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 9 <sub>(36)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2320745106115" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 10 <sub>(37)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2379699063491" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 11 <sub>(38)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330426870467" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 12 <sub>(39)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330428639939" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 13 <sub>(40)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2307232434814" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 14 <sub>(41)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2307254520446" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 15 <sub>(42)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2379794746051" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 16 <sub>(43)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2379793828547" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 17 <sub>(44)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"  src="//ok.ru/videoembed/2379890559683" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 18 <sub>(45)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2379889445571"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 19 <sub>(46)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"  src="//ok.ru/videoembed/2379891804867" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 20 <sub>(47)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330754288323" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 21 <sub>(48)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2330754353859" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 22 <sub>(49)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2292292520643" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 23 <sub>(50)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2306694384323" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 24 <sub>(51)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2321959815875" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card">
                        <h3>Episode 25 <sub>(52)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2337458883267" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 26 <sub>(53)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2353161112259" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div> 
   
                <div className="column">
                    <div className="card">
                        <h3>Episode 27 <sub>(54)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"   src="//ok.ru/videoembed/2495738743365" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 28 <sub>(55)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2890852076056" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 29 <sub>(56)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2250081176190" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 30 <sub>(57)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2926053820952" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 31 <sub>(58)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"  src="//ok.ru/videoembed/2440330152643" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 32 <sub>(59)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2453640383171" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card">
                        <h3>Episode 33 <sub>(60)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2313365359230" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 34 <sub>(61)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"  src="//ok.ru/videoembed/2346386131582" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 35 <sub>(62)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500"src="//ok.ru/videoembed/2344081427070" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>



                <div className="column">
                    <div className="card">
                        <h3>Episode 36 <sub>(63)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2359540583038" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                    </div>
                    </div>
                </div>

                 <div className="column">
                    <div className="card">
                        <h3>Episode 37 <sub>(64)</sub></h3>
                        <div className="iframe-container" >
                        <iframe id="youtube" title="Episode 1"  width="450" height="500" src="//ok.ru/videoembed/2374995675774" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                        </div>
                    </div>
                </div> 


         </div>
      }
        </div>
    )
}

export default Season2KurUrduSub
