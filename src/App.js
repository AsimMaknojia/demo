import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
// import Banner from './Components/Banner/Banner';
// import Sectionone from './Components/Sectionone/Sectionone';
// import Slidersection from './Components/Slidersection/Slidersection';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/Homepage';
// import Sectionone from './Components/Sectionone/Sectionone';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homepage/>
     {/* <Banner/> */}
     {/* <Sectionone/> */}
     {/* <Slidersection/> */}
     <Footer/>
     
    </div>
  );
}

export default App;
