import React from "react";
import "./Contacts.css";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function CommunityTable() {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    axios
      .get(`${AutobotBackend}/admin/community`, {})
      .then((response) => {
        setComment(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comment]);

  function deleteProduct(id) {
    axios
      .delete(`${AutobotBackend}/admin/deletecommunityhistory/${id}`, {
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
        <h1> Community</h1>
        <div className="overview-card">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Message</th>
                <th scope="col">Posted at</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {comment ? (
                comment.map((obj, key) => (
                  <tr key={key}>
                    <td>{obj.username}</td>
                    <td>{obj.message}</td>
                    <td>{obj.date}</td>
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
