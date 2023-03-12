import React from "react";
import "./Contacts.css";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Contacts() {
  const [mail, setMail] = useState(null);
  useEffect(() => {
    //catalog is purchases or carts
    axios
      .get(`${AutobotBackend}/admin/contact`, {})
      .then((response) => {
        setMail(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mail]);

  function deleteProduct(id) {
    axios
      .delete(`${AutobotBackend}/admin/deletecontacthistory/${id}`, {
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
        <h1>Contacts by users</h1>
        <div className="admintable-card text-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Message</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {mail ? (
                mail.map((obj, key) => (
                  <tr key={key}>
                    <td>{obj.username}</td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.message}</td>
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
