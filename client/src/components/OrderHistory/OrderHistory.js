import React from "react";
import "./Orders.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
import { useAuth } from "../../Middleware/auth";
import ConfirmDelete from "../../Admin/ConfirmDelete";
import Loader from "./../Loader/Loader";

import { toast } from "react-toastify";
export default function OrderHistory() {
  const [id, setId] = useState(null);
  const [purchase, setPurchase] = useState(null);
  const [filterList, setFilterList] = useState(purchase);
  const auth = useAuth();
  const handleConfirmation = (e, id) => {
    e.preventDefault();
    setId(id);
  };
  function deleteProduct(id) {
    axios
      .delete(`${AutobotBackend}/admin/deletecarthistory/${id}`, {
        params: {},
      })
      .then((response) => {
        toast.info("Removed successfully", {
          position: "top-left",
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    //catalog is purchases or carts
    axios
      .get(`${AutobotBackend}/admin/catalog`, {})
      .then((response) => {
        setPurchase(response.data.reverse());
        setFilterList(purchase.filter((item) => item.username === auth.user));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [purchase, auth]);
 
  return (
    <>
      <ConfirmDelete id={id} delete={deleteProduct} />
      <div className="OrderHistory">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterList ? (
              filterList.map((obj, key) => (
                <tr key={key}>
                  <td>{obj.name}</td>
                  <td>{obj.price}</td>
                  <td className="service-delete">
                    <i
                      className="fa fa-trash-o fa-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteconirmationmodal"
                      onClick={(e) => handleConfirmation(e, obj._id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
