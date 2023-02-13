import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './Styles/MainStyle.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Products from '../Products/Products';
import About from '../About/About';
import Services from '../Services/Services';
import Spare from '../Spare/Spare';
export default function Autobot() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='aboutus' element={<About />}></Route>
        <Route path='spare' element={<Spare />}></Route>
        <Route path='services' element={<Services />}></Route>
      </Routes>
    </div>
  )
}
