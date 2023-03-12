import React from "react";
import "./Contacts.css";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Registry() {
  const [testride, setTestride] = useState(null);
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
      .delete(`${AutobotBackend}/api/deletehistory/${id}`, {
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
        <h1>Test Ride Requests</h1>
        <div className="overview-card text-center">
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
