import React, { useState } from 'react';
import DropNav from './DropNav';
//import '../App.css';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logarithm from './pages/Logarithm';
import Linear from './pages/Linear';
import XCube from './pages/XCube';
import XSquare from './pages/XSquare';
import XSqX1 from './pages/XSqX1';
import Exponantial from './pages/Exponantial';
import EXX1 from './pages/EXX1';   
import Hello from './Hello';
function Graph() {
  const [logarithmvalue,getlogarithm] = useState(null);
const [exx1,getexx1] = useState(null);
const [linear,getlinear] = useState(null);
const [exponantial,getexponantial] = useState(null);
const [xcube,getxcube] = useState(null);
const [xsquare,getxsquare] = useState(null);
const [xsqx1,getxsqx1] = useState(null);
const [pagevalue,getpagevalue] = useState(1);
const selectHandler = (element)=>{
      if(element==='Exponantial')
      {
        getexponantial(1)
        getlogarithm(null)
        getlinear(null)
        getexx1(null)
        getxcube(null)
        getxsquare(null)
        getxsqx1(null)


      }
      else if(element==='EXX1')
      {
        getexx1(1)
        getexponantial(null)
        getlogarithm(null)
        getlinear(null)
        
        getxcube(null)
        getxsquare(null)
        getxsqx1(null)
        

      }
      else if(element==='Linear')
      {
        getexponantial(null)
        getlogarithm(null)
        getlinear(1)
        getexx1(null)
        getxcube(null)
        getxsquare(null)
        getxsqx1(null)
        
      }
      else if(element==='Logarithm')
      {
        getexponantial(null)
        getlogarithm(1)
        getlinear(null)
        getexx1(null)
        getxcube(null)
        getxsquare(null)
        getxsqx1(null)
        
      }
      else if(element==='XCube')
      {
        getexponantial(null)
        getlogarithm(null)
        getlinear(null)
        getexx1(null)
        getxcube(1)
        getxsquare(null)
        getxsqx1(null)
        
      }
      else if(element==='XSquare')
      {
        getexponantial(null)
        getlogarithm(null)
        getlinear(null)
        getexx1(null)
        getxcube(null)
        getxsquare(1)
        getxsqx1(null)
        
      }
      else if(element==='XSqX1')
      {
        getexponantial(null)
        getlogarithm(null)
        getlinear(null)
        getexx1(null)
        getxcube(null)
        getxsquare(null)
        getxsqx1(1)
        
      }
      else if(element==='plot')
      {
         getpagevalue(1)

      }
      
      
      
}
  return (
    <React.Fragment>
      <DropNav value={selectHandler}></DropNav>
      {!logarithmvalue && !exponantial && !linear && !xcube && !xsquare && !xsqx1 && !exx1 && pagevalue && <Hello/>}
      {!logarithmvalue && exponantial && !linear && !xcube && !xsquare && !xsqx1 && !exx1 && pagevalue && <Exponantial/>}
      {logarithmvalue && !exponantial && !linear && !xcube && !xsquare && !xsqx1 && !exx1 && pagevalue && <Logarithm/>}
      {!logarithmvalue && !exponantial && linear && !xcube && !xsquare && !xsqx1 && !exx1 &&  pagevalue && <Linear/>}
      {!logarithmvalue && !exponantial && !linear && xcube && !xsquare && !xsqx1 && !exx1 &&  pagevalue &&<XCube/>}
      {!logarithmvalue && !exponantial && !linear && !xcube && xsquare && !xsqx1 && !exx1 && pagevalue &&  <XSquare/>}
      {!logarithmvalue && !exponantial && !linear && !xcube && !xsquare && xsqx1 && !exx1 && pagevalue && <XSqX1/>}
      {!logarithmvalue && !exponantial && !linear && !xcube && !xsquare && !xsqx1 && exx1 && pagevalue && <EXX1/>}
      </React.Fragment>
  );
}

export default Graph;