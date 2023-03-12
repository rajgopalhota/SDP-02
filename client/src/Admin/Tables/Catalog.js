import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Catalog() {
  const [purchase, setPurchase] = useState(null);
  useEffect(() => {
    //catalog is purchases or carts
    axios
      .get(`${AutobotBackend}/admin/catalog`, {})
      .then((response) => {
        setPurchase(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [purchase]);

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

  return (
    <div>
      <div className="admintables">
        <h1>Catalogs</h1>
        <div className="admintable-card text-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {purchase ? (
                purchase.map((obj, key) => (
                  <tr key={key}>
                    <td>{obj.username}</td>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>
                    <td className="service-delete">
                      <i
                        className="fa fa-trash-o fa-lg"
                        onClick={() => deleteProduct(obj._id)}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <Loader />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
