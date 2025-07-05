import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router';
import Route from './components/Rout';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Route />
   </BrowserRouter>
   </>
  )
}

export default App
