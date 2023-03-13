import React from "react";
import "./Contacts.css";
import axios from "axios";
import { toast } from "react-toastify";
import ConfirmDelete from "../ConfirmDelete";

import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Registry() {
  const [testride, setTestride] = useState(null);
  const [id, setId] = useState(null);
  const handleConfirmation = (e, id) => {
    e.preventDefault();
    setId(id);
  }
  useEffect(() => {
    axios
      .get(`${AutobotBackend}/admin/testride`, {})
      .then((response) => {
        setTestride(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [testride]);

  function deleteProduct(id) {
    axios
      .delete(`${AutobotBackend}/admin/deletetestridehistory/${id}`, {
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
        <ConfirmDelete id={id} delete={deleteProduct} />

        <h1>Test Ride Requests</h1>
        <div className="table-responsive">
          <div className="admintable-card text-center">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone </th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Cartype</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {testride ? (
                  testride.map((obj, key) => (
                    <tr key={key}>
                      <td>{obj.username}</td>
                      <td>{obj.email}</td>
                      <td>{obj.phone}</td>
                      <td>{obj.date}</td>
                      <td>{obj.time}</td>
                      <td>{obj.cartype}</td>
                      <td className="service-delete">
                        <i
                          className="fa fa-trash-o fa-lg" data-bs-toggle="modal" data-bs-target="#deleteconirmationmodal"
                          onClick={(e) => handleConfirmation(e, obj._id)}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                    <Loader/>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
