import React from 'react'
import { useAuth } from '../../Middleware/auth'
import './Styles/Cart.css'
import spareList from '../Spare/Data';
export default function Cart() {
  const auth = useAuth();

  return (
    <div className='Cart'>
      <div className="modal fade modal-lg" id="cartModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h4 className="modal-title fs-5" id="exampleModalLabel">{auth.user}'s Cart</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                spareList.map(item => (
                  <div className="card" width="18rem">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-success">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
