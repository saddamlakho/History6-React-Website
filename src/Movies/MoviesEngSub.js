import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Turkler from './Turkler.jpg'
import Deliler from './Deliler.jpg'
import {Helmet} from 'react-helmet'


function MoviesEngSub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>

            <Helmet>
            <title>Turkish Movie in English Subtitles</title> 
            </Helmet>

             <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
               {isMenuOpen && <Menu />}


               <Fade top> <h1 style={{color: '#000', }} >English Subtitles</h1> </Fade>

    
               <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
           <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> </h1> 
           <Fade left>
            <Link  exact  to="/turkler-geliyer-eng-subtitles"> 
                <img className="pic" src={Turkler} height="700" width="900" alt="Turkler Geliyor" /> 
             </Link>
             </Fade>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              
            </span>
          </div>
        </div>
      </div>
      </div>
  </div>


  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
           <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> </h1> 
           <Fade left>
          <Link  exact  to="/deliler-eng-subtitles"> 
                <img className="pic" src={Deliler}  height="700" width="900" alt="Deliler" /> 
             </Link>
             </Fade>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              
            </span>
          </div>
        </div>
      </div>
      </div>
  </div>




</section>
               



        </div>
    )
}

export default MoviesEngSub
