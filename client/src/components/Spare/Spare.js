import React from 'react'
// import seat from './Assets/seat.png'
// import inmirror from './Assets/inmirror.png'
// import windmirror from './Assets/windmirror.jpg'
// import redhead from './Assets/redhead.jpg'
// import bluehead from './Assets/bluehead.jpg'
// import ackkit from './Assets/ackkit.png'
// import airvent from './Assets/airvent.png'
// import brakefluid from './Assets/brakefluid.png'
// import clock from './Assets/clock.png'
// import compressor from './Assets/Compressor.png'
// import condensor from './Assets/condensor.png'
// import coolant from './Assets/coolant.png'
// import engineoil from './Assets/engineoil.png'
// import exhaust from './Assets/exhaust.png'
// import foglamp from './Assets/foglamp.png'
// import radiatorflush from './Assets/radiatorflush.png'
// import silencer from './Assets/silencer.png'
// import speaker from './Assets/speaker.png'
// import wipermotor from './Assets/wipermotor.png'
import "./Styles/Spare.css"
import spareList from './Data'
// import Card from './Card'

export default function Spare() {
  return (
    <div className='spareboxpro'>
      <div className="spare-container">
        {/* <h1>Welocme to Autobots Repair Services</h1> */}
        <form action="" method="post">
          <table>
            <tr>
              <td>
                <select name="dropdown" id='spare-dropdown'>
                  <option value="company" selected>company</option>
                  <option value="tata">Tata</option>
                  <option value="benz">Benz</option>
                  <option value="audi">Audi</option>
                </select>
              </td>
              <td>
                <input type="text" name="text" placeholder='Model' />
              </td>
              <td>
                <button className="btn">GO</button>
              </td>
            </tr>
          </table>
        </form>

        {/* Products */}
        <div className='ProductsPage'>
          <div className="product-container">
            {spareList.map(item => (
              <div className="product-card">
                <div className="product-imgBx">
                  <img key={item.id} alt="" src={item.img}></img> 
                </div>
                <div className="product-contentBx">
                  <h2 key={item.id}>{item.title}</h2> 
                  <div className="product-size">
                    <h3>Price :</h3>
                    <span key={item.id}>{item.price}&nbsp;</span> 
                    <span></span>
                    <span>RS</span>
                    <span></span>
                  </div>
                  <div className="product-color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <a href="/">Add to cart</a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
