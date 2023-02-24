import React from 'react'
import './Styles/Style.css'
import carList from './ProductsData'

export default function Products() {
    return (
        <div className='Autobot-catalog'>
            <h1>Autobots Trend</h1>
            <div className='ProductsPage'>
          <div className="product-container">
            {carList.map(item => (
              <div className="product-card" key={item.id}>
                <div className="product-imgBx">
                  <img  alt="" src={item.img}></img> 
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
                  <a href="/">Test Ride</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}
