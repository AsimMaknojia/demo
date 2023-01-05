import React, { Component } from 'react';
import './Sectionone.css';

class Sectionone extends Component {
    render(){
        return(
<div className='second'>
<div className='container'>
    <div className='row'>
        <div className='col-md-6 firstsection text-center'>
             <img src={require('.//img/Suppliers-Products-4.png')} alt="" width="100%"/>
            <button>Test Now</button>
        </div>
        <div className='col-md-6 Secondsection'>
            <img src={require('.//img/app.png')} alt=""/>
             <h3>Experts In Ecommerce And Online Marketing</h3>
<div className='acccordions-start'>
<div class="accordion" id="accordionExample">
  <div class="accordion-item mb-4">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Positives
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li> Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
            <li>Sed do eiusmod tempor incididunt ut</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item mb-4">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button blue collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Negative
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body bluea">
      <ul>
            <li> Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
            <li>Sed do eiusmod tempor incididunt ut</li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </div>
    </div>
</div>
</div>

        )
    }
    
}

export default Sectionone
