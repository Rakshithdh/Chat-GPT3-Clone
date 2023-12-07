import React from 'react'
import './Feature.css'
import { Features } from '../../containers'

const featuresData=[
  {
    title:'Compliance Assurance ',
    text:'SHD is designed to meet and exceed industry compliance standards, ensuring that healthcare organizations adhere to legal and regulatory requirements. This feature provides peace of mind, knowing that data management aligns with the latest privacy and security standards.'
  },

  {
    title:'MLP Security Integration',
    text:'SHD incorporates Multilayer Perceptron (MLP) technology, a form of artificial intelligence, to enhance security measures. MLP`s neural network capabilities provide a sophisticated defense against evolving cyber threats.'
  },

  {
    title:'Advanced Encryption Technology',
    text:'SHD employs state-of-the-art encryption algorithms to secure healthcare data, ensuring that sensitive information remains confidential and protected from unauthorized access.'
  },

  {
    title:'Dynamic Threat Management',
    text:'SHD is equipped with dynamic threat management capabilities, employing proactive monitoring and advanced analytics to swiftly identify and respond to potential security threats in real-time. This ensures a vigilant defense system that effectively mitigates risks and preserves the integrity of healthcare data.'
  }
]

const Feature = () => {
  return (
    <div className='gpt3__features section__padding' id='feature'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Features title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div>
  )
}

export default Feature
