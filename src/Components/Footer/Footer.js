import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            
<div className='footersection'>
<div className='container'>
            <div className='logo-image text-center'>
            <a href='http://localhost:3001/'><img src={require('.//img/dropshipping.png')} alt="" /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="footer_copy">
						<div class="copyright">© 2022 | All Rights Reserved</div>
					</div>

</div>
</div>

        )
    }
    
}

export default Footer
