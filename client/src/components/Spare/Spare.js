import React, { useState } from 'react'
import "./Styles/Spare.css"
import spareList from './Data'

export default function Spare() {
  const [prod, setProd] = useState("");
  const [filterList, setFilterList] = useState(spareList);
  const handlePro = (e) => {
    if (prod === "category") {
      setFilterList(spareList)
    }
    else {
      setFilterList(spareList.filter(item => item.type === prod))
    }
    e.preventDefault();
  }
  const handleOnChange = (event) => {
    setProd(event.target.value);
  }

  return (
    <div className='spareboxpro'>
      <div className="spare-container">
        <h1>Welocme to Autobots Repair Services</h1>
        <form action="" method="">
          <table>
            <tbody>
              <tr>
                <td>
                  <select name="dropdown" id='spare-dropdown' onChange={handleOnChange}>
                    <option value="category">All</option>
                    <option value="accessories">Accessories</option>
                    <option value="light">Lights</option>
                    <option value="parts">Parts</option>
                    <option value="oil">Oils</option>
                    <option value="mirror">Mirrors</option>
                  </select>
                </td>
                <td>
                  <button className="btn" onClick={handlePro}>GO</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {/* Products */}
        <div className='ProductsPage'>
          <div className="product-container">
            {
              filterList.map(item => (
                <div className="product-card" key={item.id} >
                  <div className="product-imgBx">
                    <img alt="" src={item.img}></img>
                  </div>
                  <div className="product-contentBx">
                    <h2>{item.title}</h2>
                    <div className="product-size">
                      <h3>Price :</h3>
                      <span>{item.price}&nbsp;</span>
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
