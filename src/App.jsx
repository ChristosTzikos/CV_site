import { useState } from 'react'
import React from 'react'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Body from './components/Body'
import Bottom from './components/Bottom'
import './tailwind.css'

function App() {

  return (

    <div className='min-h-screen font-inter w-full mx-auto '>


      <Intro />
      <Body />
      <Contact />
      <Bottom />

    </div>


  )
}

export default App
