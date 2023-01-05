import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
class Navbar extends Component {
    render(){
        return(
<div className=''>
            <nav className='NavbarItems p-5'>
                <div className='col-md-4 logo'>
                <a href="http://demowebs.1stopwebsitesolution.com/dropshippinguk/"><img src={require('.//img/Group-188.png')} alt="" /></a>    
                    {/* <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1> */}
                </div>
                <div className='col-md-4 menu-icon'>
                <ul>
                    {MenuItems?.map((item, index) => {
                        return(
                         <li key={index}> 
                             <a className={item.cName} href={item.url}>
                                {item.title}         
                            </a>
                        </li>
                        )
                    })}
                </ul>
                </div>
                <div className='col-md-4 getaquote-button'>
<button><a href="https://www.google.com/">Get a Quote</a></button>
                    </div>
            </nav>
            </div>
        )
    }
}

export default Navbar









