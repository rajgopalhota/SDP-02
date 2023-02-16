import React from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/Cart.css'

export default function Cart() {
  return (
    <div>
      <div className="cart-container">
        <div className="close-cart">
          <NavLink to="/autobots/home">X<span>&nbsp;close</span></NavLink>
        </div>
        <h1>This is cart.......</h1>
      </div>
    </div>
  )
}
