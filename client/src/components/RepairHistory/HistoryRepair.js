import React, { useEffect } from "react";
import { useAuth } from "../../Middleware/auth";
import { useState } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
import axios from "axios";
import Loader from "./../Loader/Loader";
import "./repairhistory.css";
export default function HistoryRepair() {
  const auth = useAuth();
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get(`${AutobotBackend}/api/repairhistory/${auth.user}`, {})
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result, auth.user]);

  return (
    <>
      {result ? (
        result.map((obj, key) => (
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">CarName</th>
                <th scope="col">Date</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr key={key}>
                <td>{obj.name}</td>
                <td>{obj.carname}</td>
                <td>{obj.date}</td>
                <td>{obj.city}</td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
}
