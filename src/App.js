import React from 'react'
import './App.css';
import Home from './Home/Home'
import Second from './SecondPage/Second'
import EnglishErtugrul from './SecondPage/EnglishErtugrul'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Season1ErtUrdu from './DirilisEpisode/Season1ErtUrdu'
import Season1ErtEng from './DirilisEpisode/Season1ErtEng'
import Season2ErtEng from './DirilisEpisode/Season2ErtEng'
import Season2ErtUrdu from './DirilisEpisode/Season2ErtUrdu'
import Season3ErtUrdu from './DirilisEpisode/Season3ErtUrdu'
import Season3ErtEng from './DirilisEpisode/Season3ErtEng'
import Season4ErtEng from './DirilisEpisode/Season4ErtEng'
import Season4ErtUrdu from './DirilisEpisode/Season4ErtUrdu'
import Season5ErtUrdu from './DirilisEpisode/Season5ErtUrdu'
import Season5ErtEng from './DirilisEpisode/Season5ErtEng'
import Season1KurUrduDub from './KurulusEpisode/Season1KurUrduDub'
import Season1KurUrduSub from './KurulusEpisode/Season1KurUrduSub'
import Seasson1KurEngSub from './KurulusEpisode/Seasson1KurEngSub'
import Season2KurUrduDub from './KurulusEpisode/Season2KurUrduDub'
import Season2KurUrduSub from './KurulusEpisode/Season2KurUrduSub'
import Season2KurEngSub from './KurulusEpisode/Season2KurEngSub'
import UrduSubKur1 from './SecondPage/UrduSubKur1'
import UrduDubKur1 from './SecondPage/UrduDubKur1'
import EngSubKur1 from './SecondPage/EngSubKur1'
import SelcukluUrduSubSeason1 from './SecondPage/SelcukluUrduSubSeason1'
import SelcukluEngSubSeason1 from './SecondPage/SelcukluEngSubSeason1'
import Season1BuyukEngSub from './BuyukSelcuklu/Season1BuyukEngSub'
import Season1BuyukUrduSub from './BuyukSelcuklu/Season1BuyukUrduSub'
import MendirmanUrduSub from './SecondPage/MendirmanUrduSub'
import MendirmanEngSub from './SecondPage/MendirmanEngSub'
import JalaluddinUrduSub from './MendirmanJalaluddin/JalaluddinUrduSub'
import JalaluddinEngSub from './MendirmanJalaluddin/JalaluddinEngSub'
import BarbarosaUrduSub from './Barbarosa/BarbarosaUrduSub'
import BarbarosaEngSub from './Barbarosa/BarbarosaEngSub'

import MoviesUrduSub from './Movies/MoviesUrduSub'
import MoviesEngSub from './Movies/MoviesEngSub'
import Tukliyer from './Movies/Tukliyer'
import Deliler from './Movies/Deliler'
import DelilerUrdu from './Movies/DelilerUrdu'
import GeliyorUrdu from './Movies/GeliyorUrdu'

import Realease from './NewRealease/Realease'
import SignIn from './ContactForm/ContactUs'
import ScrollToTop from './ContactForm/ScrollToTop'

import Privacy from './Footer/Privacy'


//NEW Realease//

import Osman25 from './NewRealease/KurulusRealeaseEpisode/Osman25'
 import Osman26 from './NewRealease/KurulusRealeaseEpisode/Osman26'
 import Osman27 from './NewRealease/KurulusRealeaseEpisode/Osman27'
 import Osman28 from './NewRealease/KurulusRealeaseEpisode/Osman28'
 import Osman29 from './NewRealease/KurulusRealeaseEpisode/Osman29'
 import Osman30 from './NewRealease/KurulusRealeaseEpisode/Osman30'
import Osman31 from './NewRealease/KurulusRealeaseEpisode/Osman31'
 import Osman32 from './NewRealease/KurulusRealeaseEpisode/Osman32'
// import Osman33 from './NewRealease/KurulusRealeaseEpisode/Osman33'
// import Osman34 from './NewRealease/KurulusRealeaseEpisode/Osman34'
// import Osman35 from './NewRealease/KurulusRealeaseEpisode/Osman35'
// import Osman36 from './NewRealease/KurulusRealeaseEpisode/Osman36'
// import Osman37 from './NewRealease/KurulusRealeaseEpisode/Osman37'
// import Osman38 from './NewRealease/KurulusRealeaseEpisode/Osman38'
// import Osman39 from './NewRealease/KurulusRealeaseEpisode/Osman39'
// import Osman40 from './NewRealease/KurulusRealeaseEpisode/Osman40'







import Dirilis54 from './NewRealease/DirilisRealeaseEpisode/Dirilis54'
 import Dirilis55 from './NewRealease/DirilisRealeaseEpisode/Dirilis55'
 import Dirilis56 from './NewRealease/DirilisRealeaseEpisode/Dirilis56'
 import Dirilis57 from './NewRealease/DirilisRealeaseEpisode/Dirilis57'
 import Dirilis58 from './NewRealease/DirilisRealeaseEpisode/Dirilis58'
 import Dirilis59 from './NewRealease/DirilisRealeaseEpisode/Dirilis59'
// import Dirilis60 from './NewRealease/DirilisRealeaseEpisode/Dirilis60'
// import Dirilis61 from './NewRealease/DirilisRealeaseEpisode/Dirilis61'
// import Dirilis62 from './NewRealease/DirilisRealeaseEpisode/Dirilis62'
// import Dirilis63 from './NewRealease/DirilisRealeaseEpisode/Dirilis63'
// import Dirilis64 from './NewRealease/DirilisRealeaseEpisode/Dirilis64'










import JalalEpisode1 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode1'
import JalalEpisode2 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode2'
import JalalEpisode3 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode3'
import JalalEpisode4 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode4'
import JalalEpisode5 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode5'
import JalalEpisode6 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode6'
import JalalEpisode7 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode7'
import JalalEpisode8 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode8'
import JalalEpisode9 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode9'
import JalalEpisode10 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode10'
import JalalEpisode11 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode11'
import JalalEpisode12 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode12'
import JalalEpisode13 from './MendirmanJalaluddin/MendirmanEngEpisode/JalalEpisode13'


import MendirmanEpisode1 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode1'
import MendirmanEpisode2 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode2'
import MendirmanEpisode3 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode3'
import MendirmanEpisode4 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode4'
import MendirmanEpisode5 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode5'
import MendirmanEpisode6 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode6'
import MendirmanEpisode7 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode7'
import MendirmanEpisode8 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode8'
import MendirmanEpisode9 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode9'
import MendirmanEpisode10 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode10'
import MendirmanEpisode11 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode11'
import MendirmanEpisode12 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode12'
import MendirmanEpisode13 from './MendirmanJalaluddin/MendirmanUrduEpisode/MendirmanEpisode13'

import BuyukEpisode1 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode1'
import BuyukEpisode2 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode2'
import BuyukEpisode3 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode3'
import BuyukEpisode4 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode4'
import BuyukEpisode5 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode5'
import BuyukEpisode6 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode6'
import BuyukEpisode7 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode7'
import BuyukEpisode8 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode8'
import BuyukEpisode9 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode9'
import BuyukEpisode10 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode10'
import BuyukEpisode11 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode11'
import BuyukEpisode12 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode12'
import BuyukEpisode13 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode13'
import BuyukEpisode14 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode14'
import BuyukEpisode15 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode15'
import BuyukEpisode16 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode16'
import BuyukEpisode17 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode17'
import BuyukEpisode18 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode18'
import BuyukEpisode19 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode19'
import BuyukEpisode20 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode20'
import BuyukEpisode21 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode21'
import BuyukEpisode22 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode22'
import BuyukEpisode23 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode23'
import BuyukEpisode24 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode24'
import BuyukEpisode25 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode25'
import BuyukEpisode26 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode26'
import BuyukEpisode27 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode27'
import BuyukEpisode28 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode28'
import BuyukEpisode29 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode29'
import BuyukEpisode30 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode30'
import BuyukEpisode31 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode31'
import BuyukEpisode32 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode32'
import BuyukEpisode33 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode33'
import BuyukEpisode34 from './BuyukSelcuklu/BuyukEnglishEpisode/BuyukEpisode34'


import SelcukluEpisode1 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode1'
import SelcukluEpisode2 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode2'
import SelcukluEpisode3 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode3'
import SelcukluEpisode4 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode4'
import SelcukluEpisode5 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode5'
import SelcukluEpisode6 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode6'
import SelcukluEpisode7 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode7'
import SelcukluEpisode8 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode8'
import SelcukluEpisode9 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode9'
import SelcukluEpisode10 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode10'
import SelcukluEpisode11 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode11'
import SelcukluEpisode12 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode12'
import SelcukluEpisode13 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode13'
import SelcukluEpisode14 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode14'
import SelcukluEpisode15 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode15'
import SelcukluEpisode16 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode16'
import SelcukluEpisode17 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode17'
import SelcukluEpisode18 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode18'
import SelcukluEpisode19 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode19'
import SelcukluEpisode20 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode20'
import SelcukluEpisode21 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode21'
import SelcukluEpisode22 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode22'
import SelcukluEpisode23 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode23'
import SelcukluEpisode24 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode24'
import SelcukluEpisode25 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode25'
import SelcukluEpisode26 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode26'
import SelcukluEpisode27 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode27'
import SelcukluEpisode28 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode28'
import SelcukluEpisode29 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode29'
import SelcukluEpisode30 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode30'
import SelcukluEpisode31 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode31'
import SelcukluEpisode32 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode32'
import SelcukluEpisode33 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode33'
import SelcukluEpisode34 from './BuyukSelcuklu/BuyukUrduEpisode/SelcukluEpisode34'


import KurulusEpisode1 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode1'
import KurulusEpisode2 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode2'
import KurulusEpisode3 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode3'
import KurulusEpisode4 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode4'
import KurulusEpisode5 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode5'
import KurulusEpisode6 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode6'
import KurulusEpisode7 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode7'
import KurulusEpisode8 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode8'
import KurulusEpisode9 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode9'
import KurulusEpisode10 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode10'
import KurulusEpisode11 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode11'
import KurulusEpisode12 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode12'
import KurulusEpisode13 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode13'
import KurulusEpisode14 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode14'
import KurulusEpisode15 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode15'
import KurulusEpisode16 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode16'
import KurulusEpisode17 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode17'
import KurulusEpisode18 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode18'
import KurulusEpisode19 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode19'
import KurulusEpisode20 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode20'
import KurulusEpisode21 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode21'
import KurulusEpisode22 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode22'
import KurulusEpisode23 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode23'
import KurulusEpisode24 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode24'
import KurulusEpisode25 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode25'
import KurulusEpisode26 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode26'
import KurulusEpisode27 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode27'
import KurulusEpisode28 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode28'
import KurulusEpisode29 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode29'
import KurulusEpisode30 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode30'
import KurulusEpisode31 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode31'
import KurulusEpisode32 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode32'
import KurulusEpisode33 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode33'
import KurulusEpisode34 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode34'
import KurulusEpisode35 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode35'
import KurulusEpisode36 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode36'
import KurulusEpisode37 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode37'
import KurulusEpisode38 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode38'
import KurulusEpisode39 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode39'
import KurulusEpisode40 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode40'
import KurulusEpisode41 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode41'
import KurulusEpisode42 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode42'
import KurulusEpisode43 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode43'
import KurulusEpisode44 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode44'
import KurulusEpisode45 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode45'
import KurulusEpisode46 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode46'
import KurulusEpisode47 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode47'
import KurulusEpisode48 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode48'
import KurulusEpisode49 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode49'
import KurulusEpisode50 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode50'
import KurulusEpisode51 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode51'
import KurulusEpisode52 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode52'
import KurulusEpisode53 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode53'
import KurulusEpisode54 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode54'
import KurulusEpisode55 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode55'
import KurulusEpisode56 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode56'
import KurulusEpisode57 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode57'
import KurulusEpisode58 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode58'
import KurulusEpisode59 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode59'
import KurulusEpisode60 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode60'
import KurulusEpisode61 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode61'
import KurulusEpisode62 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode62'
import KurulusEpisode63 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode63'
import KurulusEpisode64 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode64'
import KurulusEpisode65 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode65'
import KurulusEpisode66 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode66'
import KurulusEpisode67 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode67'
import KurulusEpisode68 from './KurulusEpisode/KurulusUrduEpisode/KurulusEpisode68'

import Kurulus2Urdu1 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu1'
import Kurulus2Urdu2 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu2'
import Kurulus2Urdu3 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu3'
import Kurulus2Urdu4 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu4'
import Kurulus2Urdu5 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu5'
import Kurulus2Urdu6 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu6'
import Kurulus2Urdu7 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu7'
import Kurulus2Urdu8 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu8'
import Kurulus2Urdu9 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu9'
import Kurulus2Urdu10 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu10'
import Kurulus2Urdu11 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu11'
import Kurulus2Urdu12 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu12'
import Kurulus2Urdu13 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu13'
import Kurulus2Urdu14 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu14'
import Kurulus2Urdu15 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu15'
import Kurulus2Urdu16 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu16'
import Kurulus2Urdu17 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu17'
import Kurulus2Urdu18 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu18'
import Kurulus2Urdu19 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu19'
 import Kurulus2Urdu20 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu20'
 import Kurulus2Urdu21 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu21'
 import Kurulus2Urdu22 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu22'
 import Kurulus2Urdu23 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu23'
 import Kurulus2Urdu24 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu24'
 import Kurulus2Urdu25 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu25'
 import Kurulus2Urdu26 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu26'
 import Kurulus2Urdu27 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu27'
 import Kurulus2Urdu28 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu28'
 import Kurulus2Urdu29 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu29'
 import Kurulus2Urdu30 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu30'
 import Kurulus2Urdu31 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu31'
 import Kurulus2Urdu32 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu32'
// import Kurulus2Urdu33 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu33'
// import Kurulus2Urdu34 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu334'
// import Kurulus2Urdu35 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu35'
// import Kurulus2Urdu36 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu36'
// import Kurulus2Urdu37 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu37'
// import Kurulus2Urdu38 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu38'
// import Kurulus2Urdu39 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu39'
// import Kurulus2Urdu40 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu40'
// import Kurulus2Urdu41 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu41'
// import Kurulus2Urdu42 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu42'
// import Kurulus2Urdu43 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu43'
// import Kurulus2Urdu44 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu44'
// import Kurulus2Urdu45 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu45'
// import Kurulus2Urdu46 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu46'
// import Kurulus2Urdu47 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu47'
// import Kurulus2Urdu48 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu48'
// import Kurulus2Urdu49 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu49'
// import Kurulus2Urdu50 from './KurulusEpisode/KurulusUrdu2Episode/Kurulus2Urdu50'










import OsmanEng1 from './KurulusEpisode/KurulusEngEpisode/OsmanEng1'
import OsmanEng2 from './KurulusEpisode/KurulusEngEpisode/OsmanEng2'
import OsmanEng3 from './KurulusEpisode/KurulusEngEpisode/OsmanEng3'
import OsmanEng4 from './KurulusEpisode/KurulusEngEpisode/OsmanEng4'
import OsmanEng5 from './KurulusEpisode/KurulusEngEpisode/OsmanEng5'
import OsmanEng6 from './KurulusEpisode/KurulusEngEpisode/OsmanEng6'
import OsmanEng7 from './KurulusEpisode/KurulusEngEpisode/OsmanEng7'
import OsmanEng8 from './KurulusEpisode/KurulusEngEpisode/OsmanEng8'
import OsmanEng9 from './KurulusEpisode/KurulusEngEpisode/OsmanEng9'
import OsmanEng10 from './KurulusEpisode/KurulusEngEpisode/OsmanEng10'
import OsmanEng11 from './KurulusEpisode/KurulusEngEpisode/OsmanEng11'
import OsmanEng12 from './KurulusEpisode/KurulusEngEpisode/OsmanEng12'
import OsmanEng13 from './KurulusEpisode/KurulusEngEpisode/OsmanEng13'
import OsmanEng14 from './KurulusEpisode/KurulusEngEpisode/OsmanEng14'
import OsmanEng15 from './KurulusEpisode/KurulusEngEpisode/OsmanEng15'
import OsmanEng16 from './KurulusEpisode/KurulusEngEpisode/OsmanEng16'
import OsmanEng17 from './KurulusEpisode/KurulusEngEpisode/OsmanEng17'
import OsmanEng18 from './KurulusEpisode/KurulusEngEpisode/OsmanEng18'
import OsmanEng19 from './KurulusEpisode/KurulusEngEpisode/OsmanEng19'
import OsmanEng20 from './KurulusEpisode/KurulusEngEpisode/OsmanEng20'
import OsmanEng21 from './KurulusEpisode/KurulusEngEpisode/OsmanEng21'
import OsmanEng22 from './KurulusEpisode/KurulusEngEpisode/OsmanEng22'
import OsmanEng23 from './KurulusEpisode/KurulusEngEpisode/OsmanEng23'
import OsmanEng24 from './KurulusEpisode/KurulusEngEpisode/OsmanEng24'
import OsmanEng25 from './KurulusEpisode/KurulusEngEpisode/OsmanEng25'
import OsmanEng26 from './KurulusEpisode/KurulusEngEpisode/OsmanEng26'
import OsmanEng27 from './KurulusEpisode/KurulusEngEpisode/OsmanEng27'

import Osman2Eng1 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng1'
import Osman2Eng2 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng2'
import Osman2Eng3 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng3'
import Osman2Eng4 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng4'
import Osman2Eng5 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng5'
import Osman2Eng6 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng6'
import Osman2Eng7 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng7'
import Osman2Eng8 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng8'
import Osman2Eng9 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng9'
import Osman2Eng10 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng10'
import Osman2Eng11 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng11'
import Osman2Eng12 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng12'
import Osman2Eng13 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng13'
import Osman2Eng14 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng14'
import Osman2Eng15 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng15'
import Osman2Eng16 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng16'
import Osman2Eng17 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng17'
import Osman2Eng18 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng18'
import Osman2Eng19 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng19'
import Osman2Eng20 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng20'
import Osman2Eng21 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng21'
import Osman2Eng22 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng22'
import Osman2Eng23 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng23'
import Osman2Eng24 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng24'
import Osman2Eng25 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng25'
import Osman2Eng26 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng26'
import Osman2Eng27 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng27'
import Osman2Eng28 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng28'
import Osman2Eng29 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng29'
import Osman2Eng30 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng30'
import Osman2Eng31 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng31'
import Osman2Eng32 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng32'
import Osman2Eng33 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng33'
import Osman2Eng34 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng34'
import Osman2Eng35 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng35'
import Osman2Eng36 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng36'
import Osman2Eng37 from './KurulusEpisode/KurulusEng2Episode/Osman2Eng37'



import DirilisSeason1Eng1 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng1'
import DirilisSeason1Eng2 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng2'
import DirilisSeason1Eng3 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng3'
import DirilisSeason1Eng4 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng4'
import DirilisSeason1Eng5 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng5'
import DirilisSeason1Eng6 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng6'
import DirilisSeason1Eng7 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng7'
import DirilisSeason1Eng8 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng8'
import DirilisSeason1Eng9 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng9'
import DirilisSeason1Eng10 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng10'
import DirilisSeason1Eng11 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng11'
import DirilisSeason1Eng12 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng12'
import DirilisSeason1Eng13 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng13'
import DirilisSeason1Eng14 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng14'
import DirilisSeason1Eng15 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng15'
import DirilisSeason1Eng16 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng16'
import DirilisSeason1Eng17 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng17'
import DirilisSeason1Eng18 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng18'
import DirilisSeason1Eng19 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng19'
import DirilisSeason1Eng20 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng20'
import DirilisSeason1Eng21 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng21'
import DirilisSeason1Eng22 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng22'
import DirilisSeason1Eng23 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng23'
import DirilisSeason1Eng24 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng24'
import DirilisSeason1Eng25 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng25'
import DirilisSeason1Eng26 from './DirilisEpisode/ErtugrulSeason1Eng/DirilisSeason1Eng26'



import DirilisSeason2Eng27 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng27'
import DirilisSeason2Eng28 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng28'
import DirilisSeason2Eng29 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng29'
import DirilisSeason2Eng30 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng30'
import DirilisSeason2Eng31 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng31'
import DirilisSeason2Eng32 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng32'
import DirilisSeason2Eng33 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng33'
import DirilisSeason2Eng34 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng34'
import DirilisSeason2Eng35 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng35'
import DirilisSeason2Eng36 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng36'
import DirilisSeason2Eng37 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng37'
import DirilisSeason2Eng38 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng38'
import DirilisSeason2Eng39 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng39'
import DirilisSeason2Eng40 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng40'
import DirilisSeason2Eng41 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng41'
import DirilisSeason2Eng42 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng42'
import DirilisSeason2Eng43 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng43'
import DirilisSeason2Eng44 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng44'
import DirilisSeason2Eng45 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng45'
import DirilisSeason2Eng46 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng46'
import DirilisSeason2Eng47 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng47'
import DirilisSeason2Eng48 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng48'
import DirilisSeason2Eng49 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng49'
import DirilisSeason2Eng50 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng50'
import DirilisSeason2Eng51 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng51'
import DirilisSeason2Eng52 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng52'
import DirilisSeason2Eng53 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng53'
import DirilisSeason2Eng54 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng54'
import DirilisSeason2Eng55 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng55'
import DirilisSeason2Eng56 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng56'
import DirilisSeason2Eng57 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng57'
import DirilisSeason2Eng58 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng58'
import DirilisSeason2Eng59 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng59'
import DirilisSeason2Eng60 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng60'
import DirilisSeason2Eng61 from './DirilisEpisode/ErtugrulSeason2Eng/DirilisSeason2Eng61'


import DirilisSeason3Eng62 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng62'
import DirilisSeason3Eng63 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng63'
import DirilisSeason3Eng64 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng64'
import DirilisSeason3Eng65 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng65'
import DirilisSeason3Eng66 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng66'
import DirilisSeason3Eng67 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng67'
import DirilisSeason3Eng68 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng68'
import DirilisSeason3Eng69 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng69'
import DirilisSeason3Eng70 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng70'
import DirilisSeason3Eng71 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng71'
import DirilisSeason3Eng72 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng72'
import DirilisSeason3Eng73 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng73'
import DirilisSeason3Eng74 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng74'
import DirilisSeason3Eng75 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng75'
import DirilisSeason3Eng76 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng76'
import DirilisSeason3Eng77 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng77'
import DirilisSeason3Eng78 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng78'
import DirilisSeason3Eng79 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng79'
import DirilisSeason3Eng80 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng80'
import DirilisSeason3Eng81 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng81'
import DirilisSeason3Eng82 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng82'
import DirilisSeason3Eng83 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng83'
import DirilisSeason3Eng84 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng84'
import DirilisSeason3Eng85 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng85'
import DirilisSeason3Eng86 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng86'
import DirilisSeason3Eng87 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng87'
import DirilisSeason3Eng88 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng88'
import DirilisSeason3Eng89 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng89'
import DirilisSeason3Eng90 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng90'
import DirilisSeason3Eng91 from './DirilisEpisode/ErtugrulSeason3Eng/DirilisSeason3Eng91'

import DirilisSeason4Eng92 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng92'
import DirilisSeason4Eng93 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng93'
import DirilisSeason4Eng94 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng94'
import DirilisSeason4Eng95 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng95'
import DirilisSeason4Eng96 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng96'
import DirilisSeason4Eng97 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng97'
import DirilisSeason4Eng98 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng98'
import DirilisSeason4Eng99 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng99'
import DirilisSeason4Eng100 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng100'
import DirilisSeason4Eng101 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng101'
import DirilisSeason4Eng102 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng102'
import DirilisSeason4Eng103 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng103'
import DirilisSeason4Eng104 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng104'
import DirilisSeason4Eng105 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng105'
import DirilisSeason4Eng106 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng106'
import DirilisSeason4Eng107 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng107'
import DirilisSeason4Eng108 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng108'
import DirilisSeason4Eng109 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng109'
import DirilisSeason4Eng110 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng110'
import DirilisSeason4Eng111 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng111'
import DirilisSeason4Eng112 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng112'
import DirilisSeason4Eng113 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng113'
import DirilisSeason4Eng114 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng114'
import DirilisSeason4Eng115 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng115'
import DirilisSeason4Eng116 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng116'
import DirilisSeason4Eng117 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng117'
import DirilisSeason4Eng118 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng118'
import DirilisSeason4Eng119 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng119'
import DirilisSeason4Eng120 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng120'
import DirilisSeason4Eng121 from './DirilisEpisode/ErtugrulSeason4Eng/DirilisSeason4Eng121'


import DirilisSeason5Eng122 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng122'
import DirilisSeason5Eng123 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng123'
import DirilisSeason5Eng124 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng124'
import DirilisSeason5Eng125 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng125'
import DirilisSeason5Eng126 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng126'
import DirilisSeason5Eng127 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng127'
import DirilisSeason5Eng128 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng128'
import DirilisSeason5Eng129 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng129'
import DirilisSeason5Eng130 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng130'
import DirilisSeason5Eng131 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng131'
import DirilisSeason5Eng132 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng132'
import DirilisSeason5Eng133 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng133'
import DirilisSeason5Eng134 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng134'
import DirilisSeason5Eng135 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng135'
import DirilisSeason5Eng136 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng136'
import DirilisSeason5Eng137 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng137'
import DirilisSeason5Eng138 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng138'
import DirilisSeason5Eng139 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng139'
import DirilisSeason5Eng140 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng140'
import DirilisSeason5Eng141 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng141'
import DirilisSeason5Eng142 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng142'
import DirilisSeason5Eng143 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng143'
import DirilisSeason5Eng144 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng144'
import DirilisSeason5Eng145 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng145'
import DirilisSeason5Eng146 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng146'
import DirilisSeason5Eng147 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng147'
import DirilisSeason5Eng148 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng148'
import DirilisSeason5Eng149 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng149'
import DirilisSeason5Eng150 from './DirilisEpisode/ErtugrulSeason5Eng/DirilisSeason5Eng150'

import DirilisSeason1Urdu1 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu1'
import DirilisSeason1Urdu2 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu2'
import DirilisSeason1Urdu3 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu3'
import DirilisSeason1Urdu4 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu4'
import DirilisSeason1Urdu5 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu5'
import DirilisSeason1Urdu6 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu6'
import DirilisSeason1Urdu7 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu7'
import DirilisSeason1Urdu8 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu8'
import DirilisSeason1Urdu9 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu9'
import DirilisSeason1Urdu10 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu10'
import DirilisSeason1Urdu11 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu11'
import DirilisSeason1Urdu12 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu12'
import DirilisSeason1Urdu13 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu13'
import DirilisSeason1Urdu14 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu14'
import DirilisSeason1Urdu15 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu15'
import DirilisSeason1Urdu16 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu16'
import DirilisSeason1Urdu17 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu17'
import DirilisSeason1Urdu18 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu18'
import DirilisSeason1Urdu19 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu19'
import DirilisSeason1Urdu20 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu20'
import DirilisSeason1Urdu21 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu21'
import DirilisSeason1Urdu22 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu22'
import DirilisSeason1Urdu23 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu23'
import DirilisSeason1Urdu24 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu24'
import DirilisSeason1Urdu25 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu25'
import DirilisSeason1Urdu26 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu26'
import DirilisSeason1Urdu27 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu27'
import DirilisSeason1Urdu28 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu28'
import DirilisSeason1Urdu29 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu29'
import DirilisSeason1Urdu30 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu30'
import DirilisSeason1Urdu31 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu31'
import DirilisSeason1Urdu32 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu32'
import DirilisSeason1Urdu33 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu33'
import DirilisSeason1Urdu34 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu34'
import DirilisSeason1Urdu35 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu35'
import DirilisSeason1Urdu36 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu36'
import DirilisSeason1Urdu37 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu37'
import DirilisSeason1Urdu38 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu38'
import DirilisSeason1Urdu39 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu39'
import DirilisSeason1Urdu40 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu40'
import DirilisSeason1Urdu41 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu41'
import DirilisSeason1Urdu42 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu42'
import DirilisSeason1Urdu43 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu43'
import DirilisSeason1Urdu44 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu44'
import DirilisSeason1Urdu45 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu45'
import DirilisSeason1Urdu46 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu46'
import DirilisSeason1Urdu47 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu47'
import DirilisSeason1Urdu48 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu48'
import DirilisSeason1Urdu49 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu49'
import DirilisSeason1Urdu50 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu50'
import DirilisSeason1Urdu51 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu51'
import DirilisSeason1Urdu52 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu52'
import DirilisSeason1Urdu53 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu53'
import DirilisSeason1Urdu54 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu54'
import DirilisSeason1Urdu55 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu55'
import DirilisSeason1Urdu56 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu56'
import DirilisSeason1Urdu57 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu57'
import DirilisSeason1Urdu58 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu58'
import DirilisSeason1Urdu59 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu59'
import DirilisSeason1Urdu60 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu60'
import DirilisSeason1Urdu61 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu61'
import DirilisSeason1Urdu62 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu62'
import DirilisSeason1Urdu63 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu63'
import DirilisSeason1Urdu64 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu64'
import DirilisSeason1Urdu65 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu65'
import DirilisSeason1Urdu66 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu66'
import DirilisSeason1Urdu67 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu67'
import DirilisSeason1Urdu68 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu68'
import DirilisSeason1Urdu69 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu69'
import DirilisSeason1Urdu70 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu70'
import DirilisSeason1Urdu71 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu71'
import DirilisSeason1Urdu72 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu72'
import DirilisSeason1Urdu73 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu73'
import DirilisSeason1Urdu74 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu74'
import DirilisSeason1Urdu75 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu75'
import DirilisSeason1Urdu76 from './DirilisEpisode/ErtugrulSeason1Urdu/DirilisSeason1Urdu76'



import DirilisSeason2Urdu1 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu1'
import DirilisSeason2Urdu2 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu2'
import DirilisSeason2Urdu3 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu3'
import DirilisSeason2Urdu4 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu4'
import DirilisSeason2Urdu5 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu5'
import DirilisSeason2Urdu6 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu6'
import DirilisSeason2Urdu7 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu7'
import DirilisSeason2Urdu8 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu8'
import DirilisSeason2Urdu9 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu9'
import DirilisSeason2Urdu10 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu10'
import DirilisSeason2Urdu11 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu11'
import DirilisSeason2Urdu12 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu12'
import DirilisSeason2Urdu13 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu13'
import DirilisSeason2Urdu14 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu14'
import DirilisSeason2Urdu15 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu15'
import DirilisSeason2Urdu16 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu16'
import DirilisSeason2Urdu17 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu17'
import DirilisSeason2Urdu18 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu18'
import DirilisSeason2Urdu19 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu19'
import DirilisSeason2Urdu20 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu20'
import DirilisSeason2Urdu21 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu21'
import DirilisSeason2Urdu22 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu22'
import DirilisSeason2Urdu23 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu23'
import DirilisSeason2Urdu24 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu24'
import DirilisSeason2Urdu25 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu25'
import DirilisSeason2Urdu26 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu26'
import DirilisSeason2Urdu27 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu27'
import DirilisSeason2Urdu28 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu28'
import DirilisSeason2Urdu29 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu29'
import DirilisSeason2Urdu30 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu30'
import DirilisSeason2Urdu31 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu31'
import DirilisSeason2Urdu32 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu32'
import DirilisSeason2Urdu33 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu33'
import DirilisSeason2Urdu34 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu34'
import DirilisSeason2Urdu35 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu35'
import DirilisSeason2Urdu36 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu36'
import DirilisSeason2Urdu37 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu37'
import DirilisSeason2Urdu38 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu38'
import DirilisSeason2Urdu39 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu39'
import DirilisSeason2Urdu40 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu40'
import DirilisSeason2Urdu41 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu41'
import DirilisSeason2Urdu42 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu42'
import DirilisSeason2Urdu43 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu43'
import DirilisSeason2Urdu44 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu44'
import DirilisSeason2Urdu45 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu45'
import DirilisSeason2Urdu46 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu46'
import DirilisSeason2Urdu47 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu47'
import DirilisSeason2Urdu48 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu48'
import DirilisSeason2Urdu49 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu49'
import DirilisSeason2Urdu50 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu50'
import DirilisSeason2Urdu51 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu51'
import DirilisSeason2Urdu52 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu52'
import DirilisSeason2Urdu53 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu53'
// import DirilisSeason2Urdu54 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu54'
import DirilisSeason2Urdu55 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu55'
import DirilisSeason2Urdu56 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu56'
import DirilisSeason2Urdu57 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu57'
import DirilisSeason2Urdu58 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu58'
import DirilisSeason2Urdu59 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu59'
import DirilisSeason2Urdu60 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu60'
import DirilisSeason2Urdu61 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu61'
import DirilisSeason2Urdu62 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu62'
import DirilisSeason2Urdu63 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu63'
import DirilisSeason2Urdu64 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu64'
import DirilisSeason2Urdu65 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu65'
import DirilisSeason2Urdu66 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu66'
import DirilisSeason2Urdu67 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu67'
import DirilisSeason2Urdu68 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu68'
import DirilisSeason2Urdu69 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu69'
import DirilisSeason2Urdu70 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu70'
import DirilisSeason2Urdu71 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu71'
import DirilisSeason2Urdu72 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu72'
import DirilisSeason2Urdu73 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu73'
import DirilisSeason2Urdu74 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu74'
import DirilisSeason2Urdu75 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu75'
import DirilisSeason2Urdu76 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu76'
import DirilisSeason2Urdu77 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu77'
import DirilisSeason2Urdu78 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu78'
import DirilisSeason2Urdu79 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu79'
import DirilisSeason2Urdu80 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu80'
import DirilisSeason2Urdu81 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu81'
import DirilisSeason2Urdu82 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu82'
import DirilisSeason2Urdu83 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu83'
import DirilisSeason2Urdu84 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu84'
import DirilisSeason2Urdu85 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu85'
import DirilisSeason2Urdu86 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu86'
import DirilisSeason2Urdu87 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu87'
import DirilisSeason2Urdu88 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu88'
import DirilisSeason2Urdu89 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu89'
import DirilisSeason2Urdu90 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu90'
import DirilisSeason2Urdu91 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu91'
import DirilisSeason2Urdu92 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu92'
import DirilisSeason2Urdu93 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu93'
import DirilisSeason2Urdu94 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu94'
import DirilisSeason2Urdu95 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu95'
import DirilisSeason2Urdu96 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu96'
import DirilisSeason2Urdu97 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu97'
import DirilisSeason2Urdu98 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu98'
import DirilisSeason2Urdu99 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu99'
import DirilisSeason2Urdu100 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu100'
import DirilisSeason2Urdu101 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu101'
import DirilisSeason2Urdu102 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu102'
import DirilisSeason2Urdu103 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu103'
import DirilisSeason2Urdu104 from './DirilisEpisode/ErtugrulSeason2Urdu/DirilisSeason2Urdu104'

import DirilisSeason3Urdu1 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu1'
import DirilisSeason3Urdu2 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu2'
import DirilisSeason3Urdu3 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu3'
import DirilisSeason3Urdu4 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu4'
import DirilisSeason3Urdu5 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu5'
import DirilisSeason3Urdu6 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu6'
import DirilisSeason3Urdu7 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu7'
import DirilisSeason3Urdu8 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu8'
import DirilisSeason3Urdu9 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu9'
import DirilisSeason3Urdu10 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu10'
import DirilisSeason3Urdu11 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu11'
import DirilisSeason3Urdu12 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu12'
import DirilisSeason3Urdu13 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu13'
import DirilisSeason3Urdu14 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu14'
import DirilisSeason3Urdu15 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu15'
import DirilisSeason3Urdu16 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu16'
import DirilisSeason3Urdu17 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu17'
import DirilisSeason3Urdu18 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu18'
import DirilisSeason3Urdu19 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu19'
import DirilisSeason3Urdu20 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu20'
import DirilisSeason3Urdu21 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu21'
import DirilisSeason3Urdu22 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu22'
import DirilisSeason3Urdu23 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu23'
import DirilisSeason3Urdu24 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu24'
import DirilisSeason3Urdu25 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu25'
import DirilisSeason3Urdu26 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu26'
import DirilisSeason3Urdu27 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu27'
import DirilisSeason3Urdu28 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu28'
import DirilisSeason3Urdu29 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu29'
import DirilisSeason3Urdu30 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu30'
import DirilisSeason3Urdu31 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu31'
import DirilisSeason3Urdu32 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu32'
import DirilisSeason3Urdu33 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu33'
import DirilisSeason3Urdu34 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu34'
import DirilisSeason3Urdu35 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu35'
import DirilisSeason3Urdu36 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu36'
import DirilisSeason3Urdu37 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu37'
import DirilisSeason3Urdu38 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu38'
import DirilisSeason3Urdu39 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu39'
import DirilisSeason3Urdu40 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu40'
import DirilisSeason3Urdu41 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu41'
import DirilisSeason3Urdu42 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu42'
import DirilisSeason3Urdu43 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu43'
import DirilisSeason3Urdu44 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu44'
import DirilisSeason3Urdu45 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu45'
import DirilisSeason3Urdu46 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu46'
import DirilisSeason3Urdu47 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu47'
import DirilisSeason3Urdu48 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu48'
import DirilisSeason3Urdu49 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu49'
import DirilisSeason3Urdu50 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu50'
import DirilisSeason3Urdu51 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu51'
import DirilisSeason3Urdu52 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu52'
import DirilisSeason3Urdu53 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu53'
import DirilisSeason3Urdu54 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu54'
import DirilisSeason3Urdu55 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu55'
import DirilisSeason3Urdu56 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu56'
import DirilisSeason3Urdu57 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu57'
import DirilisSeason3Urdu58 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu58'
import DirilisSeason3Urdu59 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu59'
import DirilisSeason3Urdu60 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu60'
import DirilisSeason3Urdu61 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu61'
import DirilisSeason3Urdu62 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu62'
import DirilisSeason3Urdu63 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu63'
import DirilisSeason3Urdu64 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu64'
import DirilisSeason3Urdu65 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu65'
import DirilisSeason3Urdu66 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu66'
import DirilisSeason3Urdu67 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu67'
import DirilisSeason3Urdu68 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu68'
import DirilisSeason3Urdu69 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu69'
import DirilisSeason3Urdu70 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu70'
import DirilisSeason3Urdu71 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu71'
import DirilisSeason3Urdu72 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu72'
import DirilisSeason3Urdu73 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu73'
import DirilisSeason3Urdu74 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu74'
import DirilisSeason3Urdu75 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu75'
import DirilisSeason3Urdu76 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu76'
import DirilisSeason3Urdu77 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu77'
import DirilisSeason3Urdu78 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu78'
import DirilisSeason3Urdu79 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu79'
import DirilisSeason3Urdu80 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu80'
import DirilisSeason3Urdu81 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu81'
import DirilisSeason3Urdu82 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu82'
import DirilisSeason3Urdu83 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu83'
import DirilisSeason3Urdu84 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu84'
import DirilisSeason3Urdu85 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu85'
import DirilisSeason3Urdu86 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu86'
import DirilisSeason3Urdu87 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu87'
import DirilisSeason3Urdu88 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu88'
import DirilisSeason3Urdu89 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu89'
import DirilisSeason3Urdu90 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu90'
import DirilisSeason3Urdu91 from './DirilisEpisode/ErtugrulSeason3Urdu/DirilisSeason3Urdu91'

import DirilisSeason4Urdu1 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu1'
import DirilisSeason4Urdu2 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu2'
import DirilisSeason4Urdu3 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu3'
import DirilisSeason4Urdu4 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu4'
import DirilisSeason4Urdu5 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu5'
import DirilisSeason4Urdu6 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu6'
import DirilisSeason4Urdu7 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu7'
import DirilisSeason4Urdu8 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu8'
import DirilisSeason4Urdu9 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu9'
import DirilisSeason4Urdu10 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu10'
import DirilisSeason4Urdu11 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu11'
import DirilisSeason4Urdu12 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu12'
import DirilisSeason4Urdu13 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu13'
import DirilisSeason4Urdu14 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu14'
import DirilisSeason4Urdu15 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu15'
import DirilisSeason4Urdu16 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu16'
import DirilisSeason4Urdu17 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu17'
import DirilisSeason4Urdu18 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu18'
import DirilisSeason4Urdu19 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu19'
import DirilisSeason4Urdu20 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu20'
import DirilisSeason4Urdu21 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu21'
import DirilisSeason4Urdu22 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu22'
import DirilisSeason4Urdu23 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu23'
import DirilisSeason4Urdu24 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu24'
import DirilisSeason4Urdu25 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu25'
import DirilisSeason4Urdu26 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu26'
import DirilisSeason4Urdu27 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu27'
import DirilisSeason4Urdu28 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu28'
import DirilisSeason4Urdu29 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu29'
import DirilisSeason4Urdu30 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu30'
import DirilisSeason4Urdu31 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu31'
import DirilisSeason4Urdu32 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu32'
import DirilisSeason4Urdu33 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu33'
import DirilisSeason4Urdu34 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu34'
import DirilisSeason4Urdu35 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu35'
import DirilisSeason4Urdu36 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu36'
import DirilisSeason4Urdu37 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu37'
import DirilisSeason4Urdu38 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu38'
import DirilisSeason4Urdu39 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu39'
import DirilisSeason4Urdu40 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu40'
import DirilisSeason4Urdu41 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu41'
import DirilisSeason4Urdu42 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu42'
import DirilisSeason4Urdu43 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu43'
import DirilisSeason4Urdu44 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu44'
import DirilisSeason4Urdu45 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu45'
import DirilisSeason4Urdu46 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu46'
import DirilisSeason4Urdu47 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu47'
import DirilisSeason4Urdu48 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu48'
import DirilisSeason4Urdu49 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu49'
import DirilisSeason4Urdu50 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu50'
 import DirilisSeason4Urdu51 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu51'
 import DirilisSeason4Urdu52 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu52'
 import DirilisSeason4Urdu53 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu53'
 import DirilisSeason4Urdu54 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu54'
 import DirilisSeason4Urdu55 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu55'
 import DirilisSeason4Urdu56 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu56'
 import DirilisSeason4Urdu57 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu57'
 import DirilisSeason4Urdu58 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu58'
 import DirilisSeason4Urdu59 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu59'
// import DirilisSeason4Urdu60 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu60'
// import DirilisSeason4Urdu61 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu61'
// import DirilisSeason4Urdu62 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu62'
// import DirilisSeason4Urdu63 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu63'
// import DirilisSeason4Urdu64 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu64'
// import DirilisSeason4Urdu65 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu65'
// import DirilisSeason4Urdu66 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu66'
// import DirilisSeason4Urdu67 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu67'
// import DirilisSeason4Urdu68 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu68'
// import DirilisSeason4Urdu69 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu69'
// import DirilisSeason4Urdu70 from './DirilisEpisode/ErtugrulSeason4Urdu/DirilisSeason4Urdu70'





function App() {

  return (
    <div>
      <Router>
        <ScrollToTop />

        <Route exact path="/" component={Home} />
        <Route exact path="/dirilis-ertugrul-urdu-dubbing" component={Second} />
        <Route exact path="/dirilis-ertugrul-english-subtitles" component={EnglishErtugrul} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing" component={Season1ErtUrdu} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles" component={Season1ErtEng} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing" component={Season2ErtUrdu} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles" component={Season2ErtEng} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing" component={Season3ErtUrdu} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles" component={Season3ErtEng} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing" component={Season4ErtUrdu} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles" component={Season4ErtEng} />
        <Route exact path="/dirilis-ertugrul-season5-urdu-dubbing" component={Season5ErtUrdu} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles" component={Season5ErtEng} />

        <Route exact path="/kurulus-osman-urdu-dubbing" component={UrduDubKur1} />
        <Route exact path="/kurulus-osman-urdu-subtitles" component={UrduSubKur1} />
        <Route exact path="/kurulus-osman-eng-subtitles" component={EngSubKur1} />
        <Route exact path="/kurulus-osman-season1-urdu-dubbing" component={Season1KurUrduDub} />
        <Route exact path="/kurulus-osman-season1-urdu-subtitles" component={Season1KurUrduSub} />
        <Route exact path="/kurulus-osman-season1-eng-subtitles" component={Seasson1KurEngSub} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing" component={Season2KurUrduDub} />
        <Route exact path="/kurulus-osman-season2-urdu-subtitles" component={Season2KurUrduSub} />
        <Route exact path="/kurulus-osman-season2-eng-subtitles" component={Season2KurEngSub} />


        <Route exact path="/buyuk-selcuklu-nizam-e-alam" component={SelcukluUrduSubSeason1} />
        <Route exact path="/buyuk-selcuklu" component={SelcukluEngSubSeason1} />
        <Route exact path="/buyuk-selcuklu-urdu-subtitles" component={Season1BuyukUrduSub} />
        <Route exact path="/buyuk-selcuklu-eng-subtitles" component={Season1BuyukEngSub} />

        <Route exact path="/mendirman-jalauddin-" component={MendirmanUrduSub} />
        <Route exact path="/mendirman-jalauddin" component={MendirmanEngSub} />
        <Route exact path="/mendirman-jalauddin-urdu-subtitles" component={JalaluddinUrduSub} />
        <Route exact path="/mendirman-jalauddin-eng-subtitles" component={JalaluddinEngSub} />

        <Route exact path="/barbarosa-urdu-subtitles" component={BarbarosaUrduSub} />
        <Route exact path="/barbarosa-eng-subtitles" component={BarbarosaEngSub} />

        <Route exact path="/movies-urdu-subtitles" component={MoviesUrduSub} />
        <Route exact path="/movies-eng-subtitles" component={MoviesEngSub} />
        <Route exact path="/turkler-geliyer-eng-subtitles" component={Tukliyer} />
        <Route exact path="/deliler-eng-subtitles" component={Deliler} />
        <Route exact path="/deliler-urdu-subtitles" component={DelilerUrdu} />
        <Route exact path="/turkler-geliyer-urdu-subtitles" component={GeliyorUrdu} />








        <Route exact path="/new-realease-episode" component={Realease} />
        <Route exact path="/contact-us" component={SignIn} />

        <Route exact path="/privacy-policy" component={Privacy} />



           {/* //New Realease// */}

           <Route exact path="/new-realease-kurulus-osman-season2-episode-25" component={Osman25} />
            <Route exact path="/new-realease-kurulus-osman-season2-episode-26" component={Osman26} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-27" component={Osman27} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-28" component={Osman28} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-29" component={Osman29} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-30" component={Osman30} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-31" component={Osman31} />
            <Route exact path="/new-realease-kurulus-osman-season2-episode-32" component={Osman32} />
           {/* <Route exact path="/new-realease-kurulus-osman-season2-episode-33" component={Osman33} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-34" component={Osman34} />
           <Route exact path="/new-realease-kurulus-osman-season2-episode-35" component={Osman35} />    */}







           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-54" component={Dirilis54} />
            <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-55" component={Dirilis55} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-56" component={Dirilis56} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-57" component={Dirilis57} />
            <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-58" component={Dirilis58} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-59" component={Dirilis59} />
           {/* <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-60" component={Dirilis60} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-61" component={Dirilis61} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-62" component={Dirilis62} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-63" component={Dirilis63} />
           <Route exact path="/new-realease-dirilis-ertugrul-season4-episode-64" component={Dirilis64} />    */}










           












        {/* Mendirman English Episode  */}
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-1" component={JalalEpisode1} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-2" component={JalalEpisode2} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-3" component={JalalEpisode3} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-4" component={JalalEpisode4} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-5" component={JalalEpisode5} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-6" component={JalalEpisode6} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-7" component={JalalEpisode7} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-8" component={JalalEpisode8} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-9" component={JalalEpisode9} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-10" component={JalalEpisode10} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-11" component={JalalEpisode11} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-12" component={JalalEpisode12} />
        <Route exact path="/mendirman-jalal-ud-din-english-sub-episode-13" component={JalalEpisode13} />

        {/* Mendirman Urdu Episode  */}

        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-1" component={MendirmanEpisode1} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-2" component={MendirmanEpisode2} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-3" component={MendirmanEpisode3} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-4" component={MendirmanEpisode4} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-5" component={MendirmanEpisode5} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-6" component={MendirmanEpisode6} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-7" component={MendirmanEpisode7} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-8" component={MendirmanEpisode8} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-9" component={MendirmanEpisode9} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-10" component={MendirmanEpisode10} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-11" component={MendirmanEpisode11} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-12" component={MendirmanEpisode12} />
        <Route exact path="/mendirman-jalal-ud-din-urdu-sub-episode-13" component={MendirmanEpisode13} />



        {/* Buyuk Selcuklu English Episode */}

        <Route exact path="/buyuk-selcuklu-english-sub-episode-1" component={BuyukEpisode1} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-2" component={BuyukEpisode2} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-3" component={BuyukEpisode3} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-4" component={BuyukEpisode4} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-5" component={BuyukEpisode5} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-6" component={BuyukEpisode6} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-7" component={BuyukEpisode7} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-8" component={BuyukEpisode8} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-9" component={BuyukEpisode9} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-10" component={BuyukEpisode10} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-11" component={BuyukEpisode11} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-12" component={BuyukEpisode12} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-13" component={BuyukEpisode13} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-14" component={BuyukEpisode14} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-15" component={BuyukEpisode15} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-16" component={BuyukEpisode16} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-17" component={BuyukEpisode17} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-18" component={BuyukEpisode18} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-19" component={BuyukEpisode19} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-20" component={BuyukEpisode20} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-21" component={BuyukEpisode21} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-22" component={BuyukEpisode22} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-23" component={BuyukEpisode23} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-24" component={BuyukEpisode24} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-25" component={BuyukEpisode25} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-26" component={BuyukEpisode26} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-27" component={BuyukEpisode27} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-28" component={BuyukEpisode28} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-29" component={BuyukEpisode29} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-30" component={BuyukEpisode30} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-31" component={BuyukEpisode31} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-32" component={BuyukEpisode32} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-33" component={BuyukEpisode33} />
        <Route exact path="/buyuk-selcuklu-english-sub-episode-34" component={BuyukEpisode34} />


        {/* Buyuk Selcuklu Urdu Episode */}

        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-1" component={SelcukluEpisode1} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-2" component={SelcukluEpisode2} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-3" component={SelcukluEpisode3} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-4" component={SelcukluEpisode4} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-5" component={SelcukluEpisode5} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-6" component={SelcukluEpisode6} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-7" component={SelcukluEpisode7} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-8" component={SelcukluEpisode8} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-9" component={SelcukluEpisode9} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-10" component={SelcukluEpisode10} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-11" component={SelcukluEpisode11} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-12" component={SelcukluEpisode12} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-13" component={SelcukluEpisode13} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-14" component={SelcukluEpisode14} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-15" component={SelcukluEpisode15} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-16" component={SelcukluEpisode16} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-17" component={SelcukluEpisode17} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-18" component={SelcukluEpisode18} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-19" component={SelcukluEpisode19} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-20" component={SelcukluEpisode20} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-21" component={SelcukluEpisode21} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-22" component={SelcukluEpisode22} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-23" component={SelcukluEpisode23} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-24" component={SelcukluEpisode24} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-25" component={SelcukluEpisode25} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-26" component={SelcukluEpisode26} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-27" component={SelcukluEpisode27} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-28" component={SelcukluEpisode28} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-29" component={SelcukluEpisode29} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-30" component={SelcukluEpisode30} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-31" component={SelcukluEpisode31} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-32" component={SelcukluEpisode32} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-33" component={SelcukluEpisode33} />
        <Route exact path="/buyuk-selcuklu-urdu-sub-episode-34" component={SelcukluEpisode34} />


        {/* Kurulus Osman Urdu Episode */}

        <Route exact path="/kurulus-osman-urdu-dubbing-1" component={KurulusEpisode1} />
        <Route exact path="/kurulus-osman-urdu-dubbing-2" component={KurulusEpisode2} />
        <Route exact path="/kurulus-osman-urdu-dubbing-3" component={KurulusEpisode3} />
        <Route exact path="/kurulus-osman-urdu-dubbing-4" component={KurulusEpisode4} />
        <Route exact path="/kurulus-osman-urdu-dubbing-5" component={KurulusEpisode5} />
        <Route exact path="/kurulus-osman-urdu-dubbing-6" component={KurulusEpisode6} />
        <Route exact path="/kurulus-osman-urdu-dubbing-7" component={KurulusEpisode7} />
        <Route exact path="/kurulus-osman-urdu-dubbing-8" component={KurulusEpisode8} />
        <Route exact path="/kurulus-osman-urdu-dubbing-9" component={KurulusEpisode9} />
        <Route exact path="/kurulus-osman-urdu-dubbing-10" component={KurulusEpisode10} />
        <Route exact path="/kurulus-osman-urdu-dubbing-11" component={KurulusEpisode11} />
        <Route exact path="/kurulus-osman-urdu-dubbing-12" component={KurulusEpisode12} />
        <Route exact path="/kurulus-osman-urdu-dubbing-13" component={KurulusEpisode13} />
        <Route exact path="/kurulus-osman-urdu-dubbing-14" component={KurulusEpisode14} />
        <Route exact path="/kurulus-osman-urdu-dubbing-15" component={KurulusEpisode15} />
        <Route exact path="/kurulus-osman-urdu-dubbing-16" component={KurulusEpisode16} />
        <Route exact path="/kurulus-osman-urdu-dubbing-17" component={KurulusEpisode17} />
        <Route exact path="/kurulus-osman-urdu-dubbing-18" component={KurulusEpisode18} />
        <Route exact path="/kurulus-osman-urdu-dubbing-19" component={KurulusEpisode19} />
        <Route exact path="/kurulus-osman-urdu-dubbing-20" component={KurulusEpisode20} />
        <Route exact path="/kurulus-osman-urdu-dubbing-21" component={KurulusEpisode21} />
        <Route exact path="/kurulus-osman-urdu-dubbing-22" component={KurulusEpisode22} />
        <Route exact path="/kurulus-osman-urdu-dubbing-23" component={KurulusEpisode23} />
        <Route exact path="/kurulus-osman-urdu-dubbing-24" component={KurulusEpisode24} />
        <Route exact path="/kurulus-osman-urdu-dubbing-25" component={KurulusEpisode25} />
        <Route exact path="/kurulus-osman-urdu-dubbing-26" component={KurulusEpisode26} />
        <Route exact path="/kurulus-osman-urdu-dubbing-27" component={KurulusEpisode27} />
        <Route exact path="/kurulus-osman-urdu-dubbing-28" component={KurulusEpisode28} />
        <Route exact path="/kurulus-osman-urdu-dubbing-29" component={KurulusEpisode29} />
        <Route exact path="/kurulus-osman-urdu-dubbing-30" component={KurulusEpisode30} />
        <Route exact path="/kurulus-osman-urdu-dubbing-31" component={KurulusEpisode31} />
        <Route exact path="/kurulus-osman-urdu-dubbing-32" component={KurulusEpisode32} />
        <Route exact path="/kurulus-osman-urdu-dubbing-33" component={KurulusEpisode33} />
        <Route exact path="/kurulus-osman-urdu-dubbing-34" component={KurulusEpisode34} />
        <Route exact path="/kurulus-osman-urdu-dubbing-35" component={KurulusEpisode35} />
        <Route exact path="/kurulus-osman-urdu-dubbing-36" component={KurulusEpisode36} />
        <Route exact path="/kurulus-osman-urdu-dubbing-37" component={KurulusEpisode37} />
        <Route exact path="/kurulus-osman-urdu-dubbing-38" component={KurulusEpisode38} />
        <Route exact path="/kurulus-osman-urdu-dubbing-39" component={KurulusEpisode39} />
        <Route exact path="/kurulus-osman-urdu-dubbing-40" component={KurulusEpisode40} />
        <Route exact path="/kurulus-osman-urdu-dubbing-41" component={KurulusEpisode41} />
        <Route exact path="/kurulus-osman-urdu-dubbing-42" component={KurulusEpisode42} />
        <Route exact path="/kurulus-osman-urdu-dubbing-43" component={KurulusEpisode43} />
        <Route exact path="/kurulus-osman-urdu-dubbing-44" component={KurulusEpisode44} />
        <Route exact path="/kurulus-osman-urdu-dubbing-45" component={KurulusEpisode45} />
        <Route exact path="/kurulus-osman-urdu-dubbing-46" component={KurulusEpisode46} />
        <Route exact path="/kurulus-osman-urdu-dubbing-47" component={KurulusEpisode47} />
        <Route exact path="/kurulus-osman-urdu-dubbing-48" component={KurulusEpisode48} />
        <Route exact path="/kurulus-osman-urdu-dubbing-49" component={KurulusEpisode49} />
        <Route exact path="/kurulus-osman-urdu-dubbing-50" component={KurulusEpisode50} />
        <Route exact path="/kurulus-osman-urdu-dubbing-51" component={KurulusEpisode51} />
        <Route exact path="/kurulus-osman-urdu-dubbing-52" component={KurulusEpisode52} />
        <Route exact path="/kurulus-osman-urdu-dubbing-53" component={KurulusEpisode53} />
        <Route exact path="/kurulus-osman-urdu-dubbing-54" component={KurulusEpisode54} />
        <Route exact path="/kurulus-osman-urdu-dubbing-55" component={KurulusEpisode55} />
        <Route exact path="/kurulus-osman-urdu-dubbing-56" component={KurulusEpisode56} />
        <Route exact path="/kurulus-osman-urdu-dubbing-57" component={KurulusEpisode57} />
        <Route exact path="/kurulus-osman-urdu-dubbing-58" component={KurulusEpisode58} />
        <Route exact path="/kurulus-osman-urdu-dubbing-59" component={KurulusEpisode59} />
        <Route exact path="/kurulus-osman-urdu-dubbing-60" component={KurulusEpisode60} />
        <Route exact path="/kurulus-osman-urdu-dubbing-61" component={KurulusEpisode61} />
        <Route exact path="/kurulus-osman-urdu-dubbing-62" component={KurulusEpisode62} />
        <Route exact path="/kurulus-osman-urdu-dubbing-63" component={KurulusEpisode63} />
        <Route exact path="/kurulus-osman-urdu-dubbing-64" component={KurulusEpisode64} />
        <Route exact path="/kurulus-osman-urdu-dubbing-65" component={KurulusEpisode65} />
        <Route exact path="/kurulus-osman-urdu-dubbing-66" component={KurulusEpisode66} />
        <Route exact path="/kurulus-osman-urdu-dubbing-67" component={KurulusEpisode67} />
        <Route exact path="/kurulus-osman-urdu-dubbing-68" component={KurulusEpisode68} />


        {/* Kurulus Osman 2 Urdu Episode */}

        <Route exact path="/kurulus-osman-season2-urdu-dubbing-1" component={Kurulus2Urdu1} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-2" component={Kurulus2Urdu2} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-3" component={Kurulus2Urdu3} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-4" component={Kurulus2Urdu4} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-5" component={Kurulus2Urdu5} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-6" component={Kurulus2Urdu6} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-7" component={Kurulus2Urdu7} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-8" component={Kurulus2Urdu8} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-9" component={Kurulus2Urdu9} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-10" component={Kurulus2Urdu10} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-11" component={Kurulus2Urdu11} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-12" component={Kurulus2Urdu12} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-13" component={Kurulus2Urdu13} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-14" component={Kurulus2Urdu14} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-15" component={Kurulus2Urdu15} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-16" component={Kurulus2Urdu16} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-17" component={Kurulus2Urdu17} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-18" component={Kurulus2Urdu18} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-19" component={Kurulus2Urdu19} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-20" component={Kurulus2Urdu20} />
         <Route exact path="/kurulus-osman-season2-urdu-dubbing-21" component={Kurulus2Urdu21} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-22" component={Kurulus2Urdu22} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-23" component={Kurulus2Urdu23} />
         <Route exact path="/kurulus-osman-season2-urdu-dubbing-24" component={Kurulus2Urdu24} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-25" component={Kurulus2Urdu25} />
         <Route exact path="/kurulus-osman-season2-urdu-dubbing-26" component={Kurulus2Urdu26} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-27" component={Kurulus2Urdu27} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-28" component={Kurulus2Urdu28} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-29" component={Kurulus2Urdu29} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-30" component={Kurulus2Urdu30} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-31" component={Kurulus2Urdu31} />
        <Route exact path="/kurulus-osman-season2-urdu-dubbing-32" component={Kurulus2Urdu32} />
        {/* // <Route exact path="/kurulus-osman-season2-urdu-dubbing-33" component={Kurulus2Urdu33} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-34" component={Kurulus2Urdu34} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-35" component={Kurulus2Urdu35} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-36" component={Kurulus2Urdu36} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-37" component={Kurulus2Urdu37} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-38" component={Kurulus2Urdu38} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-39" component={Kurulus2Urdu39} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-40" component={Kurulus2Urdu40} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-41" component={Kurulus2Urdu41} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-42" component={Kurulus2Urdu42} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-43" component={Kurulus2Urdu43} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-44" component={Kurulus2Urdu44} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-45" component={Kurulus2Urdu45} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-46" component={Kurulus2Urdu46} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-47" component={Kurulus2Urdu47} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-48" component={Kurulus2Urdu48} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-49" component={Kurulus2Urdu49} />
        // <Route exact path="/kurulus-osman-season2-urdu-dubbing-50" component={Kurulus2Urdu50} />    


 */}





        {/* Kurulus Osman 1 English Episode */}

        <Route exact path="/kurulus-osman-season1-english-subtitles-1" component={OsmanEng1} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-2" component={OsmanEng2} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-3" component={OsmanEng3} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-4" component={OsmanEng4} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-5" component={OsmanEng5} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-6" component={OsmanEng6} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-7" component={OsmanEng7} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-8" component={OsmanEng8} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-9" component={OsmanEng9} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-10" component={OsmanEng10} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-11" component={OsmanEng11} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-12" component={OsmanEng12} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-13" component={OsmanEng13} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-14" component={OsmanEng14} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-15" component={OsmanEng15} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-16" component={OsmanEng16} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-17" component={OsmanEng17} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-18" component={OsmanEng18} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-19" component={OsmanEng19} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-20" component={OsmanEng20} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-21" component={OsmanEng21} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-22" component={OsmanEng22} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-23" component={OsmanEng23} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-24" component={OsmanEng24} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-25" component={OsmanEng25} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-26" component={OsmanEng26} />
        <Route exact path="/kurulus-osman-season1-english-subtitles-27" component={OsmanEng27} />



        {/* Kurulus Osman 2 English Episode */}

        <Route exact path="/kurulus-osman-season2-english-subtitles-1" component={Osman2Eng1} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-2" component={Osman2Eng2} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-3" component={Osman2Eng3} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-4" component={Osman2Eng4} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-5" component={Osman2Eng5} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-6" component={Osman2Eng6} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-7" component={Osman2Eng7} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-8" component={Osman2Eng8} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-9" component={Osman2Eng9} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-10" component={Osman2Eng10} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-11" component={Osman2Eng11} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-12" component={Osman2Eng12} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-13" component={Osman2Eng13} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-14" component={Osman2Eng14} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-15" component={Osman2Eng15} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-16" component={Osman2Eng16} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-17" component={Osman2Eng17} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-18" component={Osman2Eng18} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-19" component={Osman2Eng19} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-20" component={Osman2Eng20} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-21" component={Osman2Eng21} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-22" component={Osman2Eng22} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-23" component={Osman2Eng23} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-24" component={Osman2Eng24} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-25" component={Osman2Eng25} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-26" component={Osman2Eng26} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-27" component={Osman2Eng27} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-28" component={Osman2Eng28} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-29" component={Osman2Eng29} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-30" component={Osman2Eng30} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-31" component={Osman2Eng31} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-32" component={Osman2Eng32} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-33" component={Osman2Eng33} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-34" component={Osman2Eng34} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-35" component={Osman2Eng35} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-36" component={Osman2Eng36} />
        <Route exact path="/kurulus-osman-season2-english-subtitles-37" component={Osman2Eng37} />



        {/* Dirilis Ertugrul 1 English Episode */}

        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-1" component={DirilisSeason1Eng1} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-2" component={DirilisSeason1Eng2} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-3" component={DirilisSeason1Eng3} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-4" component={DirilisSeason1Eng4} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-5" component={DirilisSeason1Eng5} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-6" component={DirilisSeason1Eng6} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-7" component={DirilisSeason1Eng7} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-8" component={DirilisSeason1Eng8} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-9" component={DirilisSeason1Eng9} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-10" component={DirilisSeason1Eng10} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-11" component={DirilisSeason1Eng11} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-12" component={DirilisSeason1Eng12} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-13" component={DirilisSeason1Eng13} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-14" component={DirilisSeason1Eng14} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-15" component={DirilisSeason1Eng15} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-16" component={DirilisSeason1Eng16} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-17" component={DirilisSeason1Eng17} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-18" component={DirilisSeason1Eng18} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-19" component={DirilisSeason1Eng19} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-20" component={DirilisSeason1Eng20} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-21" component={DirilisSeason1Eng21} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-22" component={DirilisSeason1Eng22} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-23" component={DirilisSeason1Eng23} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-24" component={DirilisSeason1Eng24} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-25" component={DirilisSeason1Eng25} />
        <Route exact path="/dirilis-ertugrul-season1-english-subtitles-26" component={DirilisSeason1Eng26} />


        {/* Dirilis Ertugrul 2 English Episode */}

        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-27" component={DirilisSeason2Eng27} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-28" component={DirilisSeason2Eng28} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-29" component={DirilisSeason2Eng29} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-30" component={DirilisSeason2Eng30} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-31" component={DirilisSeason2Eng31} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-32" component={DirilisSeason2Eng32} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-33" component={DirilisSeason2Eng33} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-34" component={DirilisSeason2Eng34} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-35" component={DirilisSeason2Eng35} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-36" component={DirilisSeason2Eng36} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-37" component={DirilisSeason2Eng37} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-38" component={DirilisSeason2Eng38} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-39" component={DirilisSeason2Eng39} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-40" component={DirilisSeason2Eng40} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-41" component={DirilisSeason2Eng41} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-42" component={DirilisSeason2Eng42} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-43" component={DirilisSeason2Eng43} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-44" component={DirilisSeason2Eng44} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-45" component={DirilisSeason2Eng45} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-46" component={DirilisSeason2Eng46} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-47" component={DirilisSeason2Eng47} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-48" component={DirilisSeason2Eng48} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-49" component={DirilisSeason2Eng49} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-50" component={DirilisSeason2Eng50} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-51" component={DirilisSeason2Eng51} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-52" component={DirilisSeason2Eng52} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-53" component={DirilisSeason2Eng53} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-54" component={DirilisSeason2Eng54} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-55" component={DirilisSeason2Eng55} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-56" component={DirilisSeason2Eng56} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-57" component={DirilisSeason2Eng57} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-58" component={DirilisSeason2Eng58} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-59" component={DirilisSeason2Eng59} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-60" component={DirilisSeason2Eng60} />
        <Route exact path="/dirilis-ertugrul-season2-english-subtitles-61" component={DirilisSeason2Eng61} />


        {/* Dirilis Ertugrul 3 English Episode */}

        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-62" component={DirilisSeason3Eng62} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-63" component={DirilisSeason3Eng63} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-64" component={DirilisSeason3Eng64} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-65" component={DirilisSeason3Eng65} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-66" component={DirilisSeason3Eng66} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-67" component={DirilisSeason3Eng67} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-68" component={DirilisSeason3Eng68} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-69" component={DirilisSeason3Eng69} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-70" component={DirilisSeason3Eng70} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-71" component={DirilisSeason3Eng71} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-72" component={DirilisSeason3Eng72} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-73" component={DirilisSeason3Eng73} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-74" component={DirilisSeason3Eng74} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-75" component={DirilisSeason3Eng75} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-76" component={DirilisSeason3Eng76} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-77" component={DirilisSeason3Eng77} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-78" component={DirilisSeason3Eng78} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-79" component={DirilisSeason3Eng79} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-80" component={DirilisSeason3Eng80} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-81" component={DirilisSeason3Eng81} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-82" component={DirilisSeason3Eng82} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-83" component={DirilisSeason3Eng83} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-84" component={DirilisSeason3Eng84} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-85" component={DirilisSeason3Eng85} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-86" component={DirilisSeason3Eng86} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-87" component={DirilisSeason3Eng87} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-88" component={DirilisSeason3Eng88} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-89" component={DirilisSeason3Eng89} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-90" component={DirilisSeason3Eng90} />
        <Route exact path="/dirilis-ertugrul-season3-english-subtitles-91" component={DirilisSeason3Eng91} />


        {/* Dirilis Ertugrul 4 English Episode */}

        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-92" component={DirilisSeason4Eng92} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-93" component={DirilisSeason4Eng93} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-94" component={DirilisSeason4Eng94} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-95" component={DirilisSeason4Eng95} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-96" component={DirilisSeason4Eng96} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-97" component={DirilisSeason4Eng97} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-98" component={DirilisSeason4Eng98} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-99" component={DirilisSeason4Eng99} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-100" component={DirilisSeason4Eng100} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-101" component={DirilisSeason4Eng101} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-102" component={DirilisSeason4Eng102} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-103" component={DirilisSeason4Eng103} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-104" component={DirilisSeason4Eng104} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-105" component={DirilisSeason4Eng105} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-106" component={DirilisSeason4Eng106} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-107" component={DirilisSeason4Eng107} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-108" component={DirilisSeason4Eng108} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-109" component={DirilisSeason4Eng109} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-110" component={DirilisSeason4Eng110} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-111" component={DirilisSeason4Eng111} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-112" component={DirilisSeason4Eng112} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-113" component={DirilisSeason4Eng113} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-114" component={DirilisSeason4Eng114} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-115" component={DirilisSeason4Eng115} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-116" component={DirilisSeason4Eng116} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-117" component={DirilisSeason4Eng117} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-118" component={DirilisSeason4Eng118} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-119" component={DirilisSeason4Eng119} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-120" component={DirilisSeason4Eng120} />
        <Route exact path="/dirilis-ertugrul-season4-english-subtitles-121" component={DirilisSeason4Eng121} />


        {/* Dirilis Ertugrul 5 English Episode */}

        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-122" component={DirilisSeason5Eng122} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-123" component={DirilisSeason5Eng123} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-124" component={DirilisSeason5Eng124} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-125" component={DirilisSeason5Eng125} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-126" component={DirilisSeason5Eng126} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-127" component={DirilisSeason5Eng127} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-128" component={DirilisSeason5Eng128} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-129" component={DirilisSeason5Eng129} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-130" component={DirilisSeason5Eng130} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-131" component={DirilisSeason5Eng131} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-132" component={DirilisSeason5Eng132} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-133" component={DirilisSeason5Eng133} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-134" component={DirilisSeason5Eng134} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-135" component={DirilisSeason5Eng135} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-136" component={DirilisSeason5Eng136} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-137" component={DirilisSeason5Eng137} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-138" component={DirilisSeason5Eng138} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-139" component={DirilisSeason5Eng139} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-140" component={DirilisSeason5Eng140} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-141" component={DirilisSeason5Eng141} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-142" component={DirilisSeason5Eng142} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-143" component={DirilisSeason5Eng143} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-144" component={DirilisSeason5Eng144} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-145" component={DirilisSeason5Eng145} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-146" component={DirilisSeason5Eng146} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-147" component={DirilisSeason5Eng147} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-148" component={DirilisSeason5Eng148} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-149" component={DirilisSeason5Eng149} />
        <Route exact path="/dirilis-ertugrul-season5-english-subtitles-150" component={DirilisSeason5Eng150} />




        {/* Dirilis Ertugrul 1 Urdu Episode */}

        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-1" component={DirilisSeason1Urdu1} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-2" component={DirilisSeason1Urdu2} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-3" component={DirilisSeason1Urdu3} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-4" component={DirilisSeason1Urdu4} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-5" component={DirilisSeason1Urdu5} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-6" component={DirilisSeason1Urdu6} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-7" component={DirilisSeason1Urdu7} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-8" component={DirilisSeason1Urdu8} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-9" component={DirilisSeason1Urdu9} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-10" component={DirilisSeason1Urdu10} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-11" component={DirilisSeason1Urdu11} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-12" component={DirilisSeason1Urdu12} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-13" component={DirilisSeason1Urdu13} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-14" component={DirilisSeason1Urdu14} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-15" component={DirilisSeason1Urdu15} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-16" component={DirilisSeason1Urdu16} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-17" component={DirilisSeason1Urdu17} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-18" component={DirilisSeason1Urdu18} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-19" component={DirilisSeason1Urdu19} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-20" component={DirilisSeason1Urdu20} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-21" component={DirilisSeason1Urdu21} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-22" component={DirilisSeason1Urdu22} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-23" component={DirilisSeason1Urdu23} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-24" component={DirilisSeason1Urdu24} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-25" component={DirilisSeason1Urdu25} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-26" component={DirilisSeason1Urdu26} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-27" component={DirilisSeason1Urdu27} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-28" component={DirilisSeason1Urdu28} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-29" component={DirilisSeason1Urdu29} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-30" component={DirilisSeason1Urdu30} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-31" component={DirilisSeason1Urdu31} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-32" component={DirilisSeason1Urdu32} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-33" component={DirilisSeason1Urdu33} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-34" component={DirilisSeason1Urdu34} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-35" component={DirilisSeason1Urdu35} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-36" component={DirilisSeason1Urdu36} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-37" component={DirilisSeason1Urdu37} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-38" component={DirilisSeason1Urdu38} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-39" component={DirilisSeason1Urdu39} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-40" component={DirilisSeason1Urdu40} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-41" component={DirilisSeason1Urdu41} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-42" component={DirilisSeason1Urdu42} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-43" component={DirilisSeason1Urdu43} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-44" component={DirilisSeason1Urdu44} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-45" component={DirilisSeason1Urdu45} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-46" component={DirilisSeason1Urdu46} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-47" component={DirilisSeason1Urdu47} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-48" component={DirilisSeason1Urdu48} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-49" component={DirilisSeason1Urdu49} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-50" component={DirilisSeason1Urdu50} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-51" component={DirilisSeason1Urdu51} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-52" component={DirilisSeason1Urdu52} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-53" component={DirilisSeason1Urdu53} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-54" component={DirilisSeason1Urdu54} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-55" component={DirilisSeason1Urdu55} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-56" component={DirilisSeason1Urdu56} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-57" component={DirilisSeason1Urdu57} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-58" component={DirilisSeason1Urdu58} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-59" component={DirilisSeason1Urdu59} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-60" component={DirilisSeason1Urdu60} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-61" component={DirilisSeason1Urdu61} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-62" component={DirilisSeason1Urdu62} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-63" component={DirilisSeason1Urdu63} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-64" component={DirilisSeason1Urdu64} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-65" component={DirilisSeason1Urdu65} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-66" component={DirilisSeason1Urdu66} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-67" component={DirilisSeason1Urdu67} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-68" component={DirilisSeason1Urdu68} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-69" component={DirilisSeason1Urdu69} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-70" component={DirilisSeason1Urdu70} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-71" component={DirilisSeason1Urdu71} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-72" component={DirilisSeason1Urdu72} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-73" component={DirilisSeason1Urdu73} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-74" component={DirilisSeason1Urdu74} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-75" component={DirilisSeason1Urdu75} />
        <Route exact path="/dirilis-ertugrul-season1-urdu-dubbing-76" component={DirilisSeason1Urdu76} />
     


        {/* Dirilis Ertugrul 2 Urdu Episode */}

       
       
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-1" component={DirilisSeason2Urdu1} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-2" component={DirilisSeason2Urdu2} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-3" component={DirilisSeason2Urdu3} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-4" component={DirilisSeason2Urdu4} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-5" component={DirilisSeason2Urdu5} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-6" component={DirilisSeason2Urdu6} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-7" component={DirilisSeason2Urdu7} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-8" component={DirilisSeason2Urdu8} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-9" component={DirilisSeason2Urdu9} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-10" component={DirilisSeason2Urdu10} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-11" component={DirilisSeason2Urdu11} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-12" component={DirilisSeason2Urdu12} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-13" component={DirilisSeason2Urdu13} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-14" component={DirilisSeason2Urdu14} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-15" component={DirilisSeason2Urdu15} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-16" component={DirilisSeason2Urdu16} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-17" component={DirilisSeason2Urdu17} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-18" component={DirilisSeason2Urdu18} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-19" component={DirilisSeason2Urdu19} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-20" component={DirilisSeason2Urdu20} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-21" component={DirilisSeason2Urdu21} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-22" component={DirilisSeason2Urdu22} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-23" component={DirilisSeason2Urdu23} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-24" component={DirilisSeason2Urdu24} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-25" component={DirilisSeason2Urdu25} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-26" component={DirilisSeason2Urdu26} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-27" component={DirilisSeason2Urdu27} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-28" component={DirilisSeason2Urdu28} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-29" component={DirilisSeason2Urdu29} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-30" component={DirilisSeason2Urdu30} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-31" component={DirilisSeason2Urdu31} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-32" component={DirilisSeason2Urdu32} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-33" component={DirilisSeason2Urdu33} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-34" component={DirilisSeason2Urdu34} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-35" component={DirilisSeason2Urdu35} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-36" component={DirilisSeason2Urdu36} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-37" component={DirilisSeason2Urdu37} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-38" component={DirilisSeason2Urdu38} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-39" component={DirilisSeason2Urdu39} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-40" component={DirilisSeason2Urdu40} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-41" component={DirilisSeason2Urdu41} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-42" component={DirilisSeason2Urdu42} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-43" component={DirilisSeason2Urdu43} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-44" component={DirilisSeason2Urdu44} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-45" component={DirilisSeason2Urdu45} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-46" component={DirilisSeason2Urdu46} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-47" component={DirilisSeason2Urdu47} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-48" component={DirilisSeason2Urdu48} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-49" component={DirilisSeason2Urdu49} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-50" component={DirilisSeason2Urdu50} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-51" component={DirilisSeason2Urdu51} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-52" component={DirilisSeason2Urdu52} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-53" component={DirilisSeason2Urdu53} />
        {/* <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-54" component={DirilisSeason2Urdu54} /> */}
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-55" component={DirilisSeason2Urdu55} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-56" component={DirilisSeason2Urdu56} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-57" component={DirilisSeason2Urdu57} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-58" component={DirilisSeason2Urdu58} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-59" component={DirilisSeason2Urdu59} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-60" component={DirilisSeason2Urdu60} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-61" component={DirilisSeason2Urdu61} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-62" component={DirilisSeason2Urdu62} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-63" component={DirilisSeason2Urdu63} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-64" component={DirilisSeason2Urdu64} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-65" component={DirilisSeason2Urdu65} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-66" component={DirilisSeason2Urdu66} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-67" component={DirilisSeason2Urdu67} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-68" component={DirilisSeason2Urdu68} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-69" component={DirilisSeason2Urdu69} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-70" component={DirilisSeason2Urdu70} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-71" component={DirilisSeason2Urdu71} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-72" component={DirilisSeason2Urdu72} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-73" component={DirilisSeason2Urdu73} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-74" component={DirilisSeason2Urdu74} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-75" component={DirilisSeason2Urdu75} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-76" component={DirilisSeason2Urdu76} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-77" component={DirilisSeason2Urdu77} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-78" component={DirilisSeason2Urdu78} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-79" component={DirilisSeason2Urdu79} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-80" component={DirilisSeason2Urdu80} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-81" component={DirilisSeason2Urdu81} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-82" component={DirilisSeason2Urdu82} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-83" component={DirilisSeason2Urdu83} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-84" component={DirilisSeason2Urdu84} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-85" component={DirilisSeason2Urdu85} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-86" component={DirilisSeason2Urdu86} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-87" component={DirilisSeason2Urdu87} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-88" component={DirilisSeason2Urdu88} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-89" component={DirilisSeason2Urdu89} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-90" component={DirilisSeason2Urdu90} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-91" component={DirilisSeason2Urdu91} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-92" component={DirilisSeason2Urdu92} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-93" component={DirilisSeason2Urdu93} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-94" component={DirilisSeason2Urdu94} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-95" component={DirilisSeason2Urdu95} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-96" component={DirilisSeason2Urdu96} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-97" component={DirilisSeason2Urdu97} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-98" component={DirilisSeason2Urdu98} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-99" component={DirilisSeason2Urdu99} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-100" component={DirilisSeason2Urdu100} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-101" component={DirilisSeason2Urdu101} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-102" component={DirilisSeason2Urdu102} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-103" component={DirilisSeason2Urdu103} />
        <Route exact path="/dirilis-ertugrul-season2-urdu-dubbing-104" component={DirilisSeason2Urdu104} /> 



        {/* Dirilis Ertugrul 3 Urdu Episode */}


       
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-1" component={DirilisSeason3Urdu1} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-2" component={DirilisSeason3Urdu2} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-3" component={DirilisSeason3Urdu3} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-4" component={DirilisSeason3Urdu4} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-5" component={DirilisSeason3Urdu5} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-6" component={DirilisSeason3Urdu6} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-7" component={DirilisSeason3Urdu7} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-8" component={DirilisSeason3Urdu8} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-9" component={DirilisSeason3Urdu9} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-10" component={DirilisSeason3Urdu10} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-11" component={DirilisSeason3Urdu11} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-12" component={DirilisSeason3Urdu12} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-13" component={DirilisSeason3Urdu13} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-14" component={DirilisSeason3Urdu14} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-15" component={DirilisSeason3Urdu15} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-16" component={DirilisSeason3Urdu16} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-17" component={DirilisSeason3Urdu17} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-18" component={DirilisSeason3Urdu18} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-19" component={DirilisSeason3Urdu19} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-20" component={DirilisSeason3Urdu20} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-21" component={DirilisSeason3Urdu21} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-22" component={DirilisSeason3Urdu22} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-23" component={DirilisSeason3Urdu23} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-24" component={DirilisSeason3Urdu24} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-25" component={DirilisSeason3Urdu25} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-26" component={DirilisSeason3Urdu26} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-27" component={DirilisSeason3Urdu27} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-28" component={DirilisSeason3Urdu28} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-29" component={DirilisSeason3Urdu29} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-30" component={DirilisSeason3Urdu30} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-31" component={DirilisSeason3Urdu31} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-32" component={DirilisSeason3Urdu32} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-33" component={DirilisSeason3Urdu33} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-34" component={DirilisSeason3Urdu34} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-35" component={DirilisSeason3Urdu35} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-36" component={DirilisSeason3Urdu36} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-37" component={DirilisSeason3Urdu37} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-38" component={DirilisSeason3Urdu38} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-39" component={DirilisSeason3Urdu39} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-40" component={DirilisSeason3Urdu40} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-41" component={DirilisSeason3Urdu41} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-42" component={DirilisSeason3Urdu42} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-43" component={DirilisSeason3Urdu43} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-44" component={DirilisSeason3Urdu44} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-45" component={DirilisSeason3Urdu45} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-46" component={DirilisSeason3Urdu46} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-47" component={DirilisSeason3Urdu47} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-48" component={DirilisSeason3Urdu48} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-49" component={DirilisSeason3Urdu49} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-50" component={DirilisSeason3Urdu50} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-51" component={DirilisSeason3Urdu51} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-52" component={DirilisSeason3Urdu52} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-53" component={DirilisSeason3Urdu53} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-54" component={DirilisSeason3Urdu54} /> 
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-55" component={DirilisSeason3Urdu55} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-56" component={DirilisSeason3Urdu56} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-57" component={DirilisSeason3Urdu57} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-58" component={DirilisSeason3Urdu58} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-59" component={DirilisSeason3Urdu59} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-60" component={DirilisSeason3Urdu60} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-61" component={DirilisSeason3Urdu61} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-62" component={DirilisSeason3Urdu62} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-63" component={DirilisSeason3Urdu63} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-64" component={DirilisSeason3Urdu64} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-65" component={DirilisSeason3Urdu65} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-66" component={DirilisSeason3Urdu66} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-67" component={DirilisSeason3Urdu67} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-68" component={DirilisSeason3Urdu68} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-69" component={DirilisSeason3Urdu69} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-70" component={DirilisSeason3Urdu70} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-71" component={DirilisSeason3Urdu71} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-72" component={DirilisSeason3Urdu72} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-73" component={DirilisSeason3Urdu73} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-74" component={DirilisSeason3Urdu74} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-75" component={DirilisSeason3Urdu75} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-76" component={DirilisSeason3Urdu76} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-77" component={DirilisSeason3Urdu77} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-78" component={DirilisSeason3Urdu78} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-79" component={DirilisSeason3Urdu79} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-80" component={DirilisSeason3Urdu80} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-81" component={DirilisSeason3Urdu81} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-82" component={DirilisSeason3Urdu82} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-83" component={DirilisSeason3Urdu83} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-84" component={DirilisSeason3Urdu84} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-85" component={DirilisSeason3Urdu85} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-86" component={DirilisSeason3Urdu86} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-87" component={DirilisSeason3Urdu87} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-88" component={DirilisSeason3Urdu88} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-89" component={DirilisSeason3Urdu89} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-90" component={DirilisSeason3Urdu90} />
        <Route exact path="/dirilis-ertugrul-season3-urdu-dubbing-91" component={DirilisSeason3Urdu91} />


        {/* Dirilis Ertugrul 4 Urdu Episode */}
         
         
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-1" component={DirilisSeason4Urdu1} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-2" component={DirilisSeason4Urdu2} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-3" component={DirilisSeason4Urdu3} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-4" component={DirilisSeason4Urdu4} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-5" component={DirilisSeason4Urdu5} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-6" component={DirilisSeason4Urdu6} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-7" component={DirilisSeason4Urdu7} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-8" component={DirilisSeason4Urdu8} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-9" component={DirilisSeason4Urdu9} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-10" component={DirilisSeason4Urdu10} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-11" component={DirilisSeason4Urdu11} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-12" component={DirilisSeason4Urdu12} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-13" component={DirilisSeason4Urdu13} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-14" component={DirilisSeason4Urdu14} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-15" component={DirilisSeason4Urdu15} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-16" component={DirilisSeason4Urdu16} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-17" component={DirilisSeason4Urdu17} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-18" component={DirilisSeason4Urdu18} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-19" component={DirilisSeason4Urdu19} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-20" component={DirilisSeason4Urdu20} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-21" component={DirilisSeason4Urdu21} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-22" component={DirilisSeason4Urdu22} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-23" component={DirilisSeason4Urdu23} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-24" component={DirilisSeason4Urdu24} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-25" component={DirilisSeason4Urdu25} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-26" component={DirilisSeason4Urdu26} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-27" component={DirilisSeason4Urdu27} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-28" component={DirilisSeason4Urdu28} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-29" component={DirilisSeason4Urdu29} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-30" component={DirilisSeason4Urdu30} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-31" component={DirilisSeason4Urdu31} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-32" component={DirilisSeason4Urdu32} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-33" component={DirilisSeason4Urdu33} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-34" component={DirilisSeason4Urdu34} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-35" component={DirilisSeason4Urdu35} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-36" component={DirilisSeason4Urdu36} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-37" component={DirilisSeason4Urdu37} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-38" component={DirilisSeason4Urdu38} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-39" component={DirilisSeason4Urdu39} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-40" component={DirilisSeason4Urdu40} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-41" component={DirilisSeason4Urdu41} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-42" component={DirilisSeason4Urdu42} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-43" component={DirilisSeason4Urdu43} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-44" component={DirilisSeason4Urdu44} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-45" component={DirilisSeason4Urdu45} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-46" component={DirilisSeason4Urdu46} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-47" component={DirilisSeason4Urdu47} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-48" component={DirilisSeason4Urdu48} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-49" component={DirilisSeason4Urdu49} />  
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-50" component={DirilisSeason4Urdu50} />
         <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-51" component={DirilisSeason4Urdu51} />
         <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-52" component={DirilisSeason4Urdu52} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-53" component={DirilisSeason4Urdu53} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-54" component={DirilisSeason4Urdu54} />
         <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-55" component={DirilisSeason4Urdu55} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-56" component={DirilisSeason4Urdu56} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-57" component={DirilisSeason4Urdu57} />
         <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-58" component={DirilisSeason4Urdu58} />
         <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-59" component={DirilisSeason4Urdu59} />
        {/* <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-60" component={DirilisSeason4Urdu60} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-61" component={DirilisSeason4Urdu61} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-62" component={DirilisSeason4Urdu62} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-63" component={DirilisSeason4Urdu63} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-64" component={DirilisSeason4Urdu64} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-65" component={DirilisSeason4Urdu65} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-66" component={DirilisSeason4Urdu66} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-67" component={DirilisSeason4Urdu67} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-68" component={DirilisSeason4Urdu68} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-69" component={DirilisSeason4Urdu69} />
        <Route exact path="/dirilis-ertugrul-season4-urdu-dubbing-70" component={DirilisSeason4Urdu70} />    


 */}









      </Router>


    </div>

  );
}

export default App;
