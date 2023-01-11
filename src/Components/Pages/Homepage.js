import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Sectionone from '../Sectionone/Sectionone';
import Slidersection from '../Slidersection/Slidersection'
import './Homepage.css';

class Homepage extends Component {
    render(){
        return(
<div className=''>
    <Banner/>
    <Sectionone/>
    <Slidersection/>
</div>
        )
    }
    
}

export default Homepage
