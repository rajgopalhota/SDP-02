import React from 'react'
import { useAuth } from '../../Middleware/auth'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AutobotBackend } from '../../Middleware/Helper';
import './Styles/Cart.css'
export default function Cart() {
  const [cart,setCart] = useState(null);
  const auth = useAuth();
  useEffect(() => {
    axios.get(`${AutobotBackend}/api/cart`, {
      params: {}
    }).then((response) => {
      console.log(response.data);
      setCart(response.data.reverse());
    }).catch((error) => {
      console.log(error)
    })
  },
    [cart]
  );
  return (
    <div className='Cart'>
      <div className="modal fade modal-lg" id="cartModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h4 className="modal-title fs-5" id="exampleModalLabel">{auth.user}'s Cart</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              {
                cart.map((obj, key) => (
                  <div className="card col-sm-4" key={key}>
                    <img src={obj.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{obj.title}</h5>
                    </div>
                    <a href="/" className="btn btn-sm btn-outline-danger">REMOVE</a>
                  </div>
                ))
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-warning">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
