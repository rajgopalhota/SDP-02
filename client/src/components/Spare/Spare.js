import React from 'react'
import seat from './Assets/seat.png'
import inmirror from './Assets/inmirror.png'
import windmirror from './Assets/windmirror.jpg'
import redhead from './Assets/redhead.jpg'
import bluehead from './Assets/bluehead.jpg'
import ackkit from './Assets/ackkit.png'
import airvent from './Assets/airvent.png'
import brakefluid from './Assets/brakefluid.png'
import clock from './Assets/clock.png'
import compressor from './Assets/Compressor.png'
import condensor from './Assets/condensor.png'
import coolant from './Assets/coolant.png'
import engineoil from './Assets/engineoil.png'
import exhaust from './Assets/exhaust.png'
import foglamp from './Assets/foglamp.png'
import radiatorflush from './Assets/radiatorflush.png'
import silencer from './Assets/silencer.png'
import speaker from './Assets/speaker.png'
import wipermotor from './Assets/wipermotor.png'
import "./Styles/Spare.css"


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
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={wipermotor} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Wiper Motor</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={silencer} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Silencer</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={radiatorflush} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Radiator Flush</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={foglamp} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Fog Lamp</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={speaker} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Speaker</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={exhaust} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Exhaust</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={engineoil} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Engine Oil</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={coolant} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Coolant</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={condensor} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Condensor</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>1</span>
                  <span>3</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={compressor} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Compressor</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={clock} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Clock</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={brakefluid} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Brake Fluid</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={airvent} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Air Vent</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>1</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={ackkit} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>AC Repair Kit</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>1</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={seat} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Nexa Seat</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={inmirror} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Nexa Mirror</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={windmirror} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Side Mirror</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  <span>8</span>
                  {/* <span>9</span> */}
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={redhead} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Red Headlight</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>7</span>
                  {/* <span>8</span> */}
                  <span>9</span>
                  <span>K</span>
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
            {/* Card one ends */}
            {/* Card -1 */}
            <div className="product-card">
              <div className="product-imgBx">
                <img src={bluehead} alt="Seat" />
              </div>
              <div className="product-contentBx">
                <h2>Blue Headlight</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  {/* <span>7</span> */}
                  <span>8</span>
                  <span>9</span>
                  <span>K</span>
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
            {/* Card one ends */}

          </div>
        </div>

      </div>
    </div>
  )
}
