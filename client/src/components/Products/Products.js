import React, { useState } from 'react'
import './Styles/Style.css'
import carList from './ProductsData'
import Testride from '../Testride/Testride'
import { Link } from "react-router-dom";

export default function Products() {
  const [pic, setPic] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const handleCart = (data, e) => {
    e.preventDefault();
    setName(data.title);
    setPic(data.img);
    setPrice(data.price);
  }
  return (
    <div className='Autobot-catalog'>
      <h1>Autobots Trend</h1>
      <div className='ProductsPage'>
        <div className="product-container">
          {carList.map(item => (
            <div className="product-card tooltip-btn-hover color-7" key={item.id}>
              <div className="product-imgBx">
                <img alt="" src={item.img}></img>
              </div>
              <div className="product-contentBx">
                <h2>{item.title}</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>{item.price}</span>
                  <span>Lakhs</span>
                  <span></span>
                  <span></span>
                </div>
                <div className="product-color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" onClick={(e) => handleCart(item, e)} >Test Ride</Link>
              </div>
            </div>
          ))}
          <Testride pic={pic} name={name} price={price} />
        </div>
      </div>
    </div>
  )
}
