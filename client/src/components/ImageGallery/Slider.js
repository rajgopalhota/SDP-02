import React from 'react'
import './Gallery.css'
import thar from './Gallery/thar.jpg'
import mercedes from './Gallery/mercedes.jpg'
import bugati from './Gallery/bugati.jpg'
import suv from './Gallery/suv.jpg'
import { NavLink } from 'react-router-dom'
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
      <div className="slider-neon-btn">
        <NavLink to="/contact" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact us
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/autobots/products" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          What's new
        </NavLink>
      </div>

    </div>
  )
}