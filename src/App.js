import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/Homepage';
import Contactpage from './Components/Pages/Contactpage';
import Servicespage from './Components/Pages/Servicespage';
import Getaquotepage from './Components/Pages/Getaquotepage';
import Aboutpage from './Components/Pages/Aboutpage';

function App() {
  return (
    <div className="App">
     {/* <Router> */}
     <Navbar/>
    {/* <Routes>
    <Route exact path="/" element={<Homepage /> } />  */}
       <Homepage/>
     <Aboutpage/>
     <Contactpage/>
     <Servicespage/>
     <Getaquotepage/>
     {/* </Routes> */}
     <Footer/>
      {/* </Router> */}
    </div>
  );
}

export default App;
