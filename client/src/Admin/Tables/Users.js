import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ConfirmDelete from "../ConfirmDelete";

import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Users() {
  const [users, setUsers] = useState(null);

  const [id, setId] = useState(null);
  const handleConfirmation = (e, id) => {
    e.preventDefault();
    setId(id);
  }
  useEffect(() => {
    //catalog is purchases or carts
    axios
      .get(`${AutobotBackend}/admin/users`, {})
      .then((response) => {
        setUsers(response.data.reverse().filter((obj, key) => obj.role !== 'Admin'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  function deleteProduct(id) {
    axios
      .delete(`${AutobotBackend}/admin/deleteusershistory/${id}`, {
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

        <h1>Autobot users</h1>
        <div className="admintable-card text-center">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date</th>
                  <th scope="col">Role</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map((obj, key) => (
                    <tr key={key}>
                      <td>{obj.username}</td>
                      <td>{obj.email}</td>
                      <td>{obj.phone}</td>
                      <td>{obj.gender}</td>
                      <td>{obj.date}</td>
                      <td>{obj.role}</td>
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
