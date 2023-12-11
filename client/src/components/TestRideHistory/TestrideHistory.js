import React from "react";
import "./TestrideHistory.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
import { useAuth } from "../../Middleware/auth";
import ConfirmDelete from "../../Admin/ConfirmDelete";
import Loader from "./../Loader/Loader";

import { toast } from "react-toastify";
export default function TestrideHistory() {

  const [testride, setTestride] = useState(null);
  const [id, setId] = useState(null);
  const [filterList, setFilterList] = useState(testride);
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
      .get(`${AutobotBackend}/admin/testride`, {})
      .then((response) => {
        setTestride(response.data.reverse());
        setFilterList(testride.filter((item) => item.username === auth.user.username));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [testride, auth]);

  return (
    <>
      <ConfirmDelete id={id} delete={deleteProduct} />
      <div className="TestrideHistory">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Car type</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterList ? (
              filterList.map((obj, key) => (
                <tr key={key}>
                  <td>{obj.email}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.date}</td>
                  <td>{obj.time}</td>
                  <td>{obj.cartype}</td>
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
      </div>
    </>
  );
}
