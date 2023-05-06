import React, { useState } from 'react'
import "./Styles/Spare.css"
import spareList from './Data'
import { Link } from 'react-router-dom';
import Loader from './../Loader/ButtonLoad'
import { toast } from "react-toastify";
import axios from 'axios'
import { useAuth } from "../../Middleware/auth";
import { AutobotBackend } from '../../Middleware/Helper';

export default function Spare() {
  const [load, setLoad] = useState(true);
  const auth = useAuth();
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

  const handleCart = (data, e) => {
    e.preventDefault();
    setLoad(null);
    const img = data.img
    const title = data.title
    const price = data.price
    if (auth.user) {
      axios
        .post(`${AutobotBackend}/items/cartpost`, {
          username: auth.user,
          image: img,
          name: title,
          price: price
        })
        .then((response) => {
          setLoad(true);
          console.log(response);
          if (response.data === "success") {
            toast.success("Added to cart", {
              position: "bottom-right",
              theme: "light",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Server error");
        });
    }
    else {
      toast.error("Please Login", {
        position: "bottom-right",
        theme: "light",
      });
    }

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
                  <button className="tooltip-btn-hover color-4" onClick={handlePro}>GO</button>
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
                <div className="product-card tooltip-btn-hover color-7" key={item.id} >
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
                    {load &&
                      <Link onClick={(e) => handleCart(item, e)}>Add to cart</Link>
                    }
                    {
                      !load &&
                      <Loader />
                    }
                  </div>

                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
