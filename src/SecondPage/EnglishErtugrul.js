import React, {  useState } from 'react';
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import './SecondPage.css'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Ertugrul1 from './Ertugrul1.jpg'
import Ertugrul2 from './Ertugrul2.jpg'
import Ertugrul3 from './Ertugrul3.jpg'
import Ertugrul4 from './Ertugrul4.jpg'
import Ertugrul5 from './Ertugrul5.jpg'
import {Helmet} from 'react-helmet'


function EnglishErtugrul() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
              <Helmet>
                <title>Dirilis Ertugrul in English Subtitles</title> 
             </Helmet>

            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
          
           

           
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Season 1</h1>
          <Fade left>
          <Link exact to="/dirilis-ertugrul-season1-english-subtitles">
                            <img className="pic" src={Ertugrul1} alt="Ertugrul Season 1" height="800" />
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
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Season 2</h1>
          <Fade left>
          <Link exact to="/dirilis-ertugrul-season2-english-subtitles">
                            <img className="pic" src={Ertugrul2} alt="Ertugrul Season 2" height="800" />
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
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Season 3</h1>
          <Fade left>
          <Link exact to="/dirilis-ertugrul-season3-english-subtitles">
                            <img className="pic" src={Ertugrul3} alt="Ertugrul Season 3" height="800" />
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
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Season 4</h1>
          <Fade left>
          <Link exact to="/dirilis-ertugrul-season4-english-subtitles">
          <img className="pic" src={Ertugrul4} alt="Ertugrul Season 4" height="800" />
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
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Season 5</h1>
          <Fade left>
          <Link exact to="/dirilis-ertugrul-season5-english-subtitles">
          <img className="pic" src={Ertugrul5} alt="Ertugrul Season 5" height="800" />
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

export default EnglishErtugrul;
