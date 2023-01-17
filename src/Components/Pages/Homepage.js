import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Customapi from '../Customapi/Customapi';
import Sectionone from '../Sectionone/Sectionone';
import Slidersection from '../Slidersection/Slidersection'
import Calculator from './Calculator'
// import Buttonss from '../Buttonss/Buttonss';
import './Homepage.css';

class Homepage extends Component {
    render(){
        return(
<div className=''>
    <Banner/>
    <Sectionone/>
    <Slidersection/>
    {/* <Buttonss/> */}
    <Calculator/>
    <Customapi/>
</div>
        )
    }
    
}

export default Homepage
