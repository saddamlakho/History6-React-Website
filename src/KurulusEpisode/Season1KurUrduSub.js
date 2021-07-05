import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';


function Season1KurUrduSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}
      

               <Fade top> <h1 style={{color: '#000', alignItems: 'center'}} >Season 1</h1> </Fade>
            
      
        
             {/* <div className="row">
              <div className="column">
                    <div className="card">
                        <h3>Episode 1</h3>
                        <div className="iframe-container" >
                        <iframe  src="//vidmoly.to/embed-jtj0k1u031ns.html" width="450" height="500" frameborder="0" allow="autoplay"  allowfullscreen=""></iframe>
                         
                         </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 2 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1451577772599" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 2 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe  id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1452537743927" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 3 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1520472689256" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                </div>

               </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 3 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1546705767163" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                       
                          </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 4 (Part 1) </h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1465996610103" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 4 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1554439277307" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 5 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1561549671163" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 5 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1479216794167" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                     
                            </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 6 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1483868342839" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 6 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1572813474555" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 7 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1513253833271" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 7 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1515726506551" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 8 (Part 1)</h3>
                        <div className="iframe-container" >

                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1600381586171" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 8 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1602238155515" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 9 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1606439013115" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 9 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1528157375031"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 10 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 10 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="450" height="500" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                  <div className="column">
                    <div className="card">
                        <h3>Episode 11 (Complete)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1855611996695" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 12 (Complete)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1863403309591"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                </div>
                
               </div>

          

                <div className="column">
                    <div className="card">
                        <h3>Episode 13 (Part 1) </h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1633568688891" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 13 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//www.ok.ru/videoembed/1554439277307" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 14 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1561549671163" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 14 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1479216794167" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                     
                            </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 15 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1483868342839" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 15 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1572813474555" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 16 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1513253833271" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 16 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1515726506551" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 17 (Part 1)</h3>
                        <div className="iframe-container" >

                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1600381586171" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 17 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1602238155515" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 18 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1606439013115" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 18 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1528157375031"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 19 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 19 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

 
                <div className="column">
                    <div className="card">
                        <h3>Episode 20 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 20 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

              
            

                <div className="column">
                    <div className="card">
                        <h3>Episode 21 (Part 1)</h3>
                        <div className="iframe-container" >

                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1600381586171" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 21 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1602238155515" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                 
                           </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 22 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500"  src="//ok.ru/videoembed/1606439013115" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 22 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1528157375031"  frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                      
                           </div>
                    </div>
                </div>


                <div className="column">
                    <div className="card">
                        <h3>Episode 23 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 23 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

 
                <div className="column">
                    <div className="card">
                        <h3>Episode 24 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 24 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

                

                <div className="column">
                    <div className="card">
                        <h3>Episode 25 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 25 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>

 
                <div className="column">
                    <div className="card">
                        <h3>Episode 26 (Part 1)</h3>
                        <div className="iframe-container" >
                        <iframe id="okvid"  width="450" height="500" src="//ok.ru/videoembed/1534652910135" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>                   
                         </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Episode 26 (Part 2)</h3>
                        <div className="iframe-container" >
                        <iframe width="660" height="415" height="500" src="//ok.ru/videoembed/1614725581563" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
                    </div>
                    </div>
                </div>



        </div> */}
        </div>
    )
}

export default Season1KurUrduSub
