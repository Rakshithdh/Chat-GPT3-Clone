import React from 'react'
import './WhatGPT3.css'
import Features from '../features/Features'

const   whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Features title='What is SHD?' text="SHD stands for Securing Healthcare Data, our commitment to safeguarding sensitive medical information. With advanced technology and robust measures, we prioritize the security of healthcare data. Join us in revolutionizing data protection for a resilient and trustworthy healthcare future. Explore the power of SHD today." />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      
      <div className='gpt3__whatgpt3-container'>
        <Features title='Robust Data Encryption' text='SHD employs state-of-the-art encryption protocols, ensuring that healthcare data is securely encoded, preventing unauthorized access and protecting patient confidentiality.' />
        <Features title='Threat Detection and Response' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        <Features title='Smart Defense Powered by MLP' text='SHD integrates an intelligent defense system utilizing Multilayer Perceptron (MLP) technology, providing an enhanced level of protection for healthcare data through its sophisticated neural network features.'/>
        
      </div>
    </div>
  )
}

export default whatGPT3
