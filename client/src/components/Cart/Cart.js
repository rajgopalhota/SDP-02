import React from 'react'
import './Styles/Cart.css'
import { useAuth } from '../../Middleware/auth'
import { toast } from "react-toastify";
import axios from "axios";
import { AutobotBackend } from '../../Middleware/Helper';
import { Link } from 'react-router-dom';


export default function Cart(props) {
  const auth = useAuth();
  const cartList = props.cartList;
  function deleteProduct(id) {
    axios.delete(`${AutobotBackend}/api/delete/${id}`,
      {
        params: {}
      }).then((response) => {
        toast.info("Removed successfully", {
          position: "top-left",
          theme: "dark",
        });
      }).catch((error) => {
        console.log(error);
      })
  }
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
                cartList ? (
                  cartList.map((obj, key) => (
                    <div className="card col-sm-4" key={key}>
                      <img src={obj.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{obj.name}</h5>
                        <h5 className="card-info">Rs. {obj.price}</h5>
                      </div>
                      <Link className="btn btn-sm btn-outline-danger" onClick={() => deleteProduct(obj._id)}>REMOVE</Link>
                    </div>
                  ))
                ) : <h1>Your cart is empty</h1>
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
