import React from 'react'
import { Footer,Header,Possibility, WhatGPT3 } from './containers'
import {Feature} from './components'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Footer />
    </div>  
  )
}

export default App
