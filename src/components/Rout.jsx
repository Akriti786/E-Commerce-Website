import React from 'react';
import {Routes,Route} from 'react-router';
import Home from './Home';

const Rout = () => {
  return (
    <>
    <Routes>
       <Route path = '/' element ={<Home/>}/> 
    </Routes>
    </>
  )
}

export default Rout;
