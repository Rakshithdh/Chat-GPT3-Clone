import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let’s Build Securing Healthcare Data SHD by using MLP</h1>
        <p>Explore SHD: Securing Healthcare Data with MLP. Our advanced Multilayer Perceptron technology ensures robust protection for sensitive healthcare information. Join us in revolutionizing data security for a resilient healthcare future.</p>
        <div className='gpt3__header-content-input'>
          <input type='email' placeholder='Your email address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content-people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> 
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header
