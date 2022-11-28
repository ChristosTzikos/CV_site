import { useState } from 'react'
import React from 'react'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Body from './components/Body'
import Bottom from './components/Bottom'
import './tailwind.css'

function App() {

  return (

    <div className='min-h-screen font-inter'>
      <Intro />
      <div className='mx-auto max-w-5xl w-10/12 '>

        <Body />
        <Contact />
        <Bottom />

      </div>
    </div>

  )
}

export default App
