import React from 'react'
import './Gallery.css'
import thar from './Gallery/thar.jpg'
import mercedes from './Gallery/mercedes.jpg'
import bugati from './Gallery/bugati.jpg'
import suv from './Gallery/suv.jpg'
export default function Slider() {
  return (
    <div className='image-slider-cont'>
      <h1>Autobots Gallery</h1>
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <img src={thar} alt='' />
          <img src={mercedes} alt='' />
          <img src={suv} alt='' />
          <img src={bugati} alt='' />
        </div>
      </div>
    </div>
  )
}
