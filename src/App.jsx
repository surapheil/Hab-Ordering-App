import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PhotoSlider from './components/body/photoSlide'
import HeroOverlay from './components/body/HeroOverlay'

function App() {
  

  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <PhotoSlider />
          <HeroOverlay />
      </section>
    </div>
  )
}

export default App
