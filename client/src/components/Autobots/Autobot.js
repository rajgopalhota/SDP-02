import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './Styles/MainStyle.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Products from '../Products/Products';
import About from '../About/About';
import Services from '../Services/Services';
import Spare from '../Spare/Spare';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';
import Alert from '../Alert';
export default function Autobot(props) {
  return (
    <div>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <Navbar />
      <Alert alert={props.alert} />
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='aboutus' element={<About />}></Route>
        <Route path='spare' element={<Spare />}></Route>
        <Route path='services' element={<Services showAlert={props.showAlert} />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        
      </Routes>
    </div>
  )
}
