import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibilty = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      
      <div className='gpt3__possibility-image'> 
        <img src={possibilityImage} alt='possibilityImage' />
      </div>
    
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>
        Securing Healthcare Data (SHD) integrates the advanced Multilayer Perceptron (MLP) algorithm for robust protection. MLP's neural network capabilities fortify the project's security, enabling dynamic threat management, real-time response mechanisms, and strict compliance adherence. This sophisticated approach ensures the utmost security for sensitive healthcare information, establishing a resilient foundation against evolving cyber threats.
        </p>
      </div>
       
    </div>
  )
}

export default Possibilty
