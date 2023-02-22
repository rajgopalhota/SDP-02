import React from "react";
import Mapslider from "../Mapslider/Mapslider";
import Rating from "../Rating/Rating";
import "./Styles/repair.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useAuth } from '../auth'


export default function Repair(props) {
  const auth = useAuth();
  const navigate = useNavigate();

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  //service handler
  const handleRepair = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    axios
      .post("http://localhost:2003/api/repair", {
        username: (auth.user),
        name: data.get("name"),
        phone: data.get("phone"),
        carname: data.get("carname"),
        date:data.get("date"),
        time:data.get("time"),
        city:data.get("city")
      })
      .then((response) => {
        console.log(response);
        navigate('/autobots/home');
        props.showAlert("Form Submitted","success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Mapslider />
      <div className="repair-container ">
        <h1>Welocme to Autobots Repair Services</h1>
        <form onSubmit={handleRepair}>
          <table>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>

            <tr>
              <td>
                <label>PhoneNumber:</label>
              </td>
              <td>
                <input type="number" name="phone" />
              </td>
            </tr>

            <tr>
              <td>
                <label>CarName:</label>
              </td>
              <td>
                <input type="text" name="carname" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Date of request:</label>
              </td>
              <td>
                <input type="date" name="date" min={disablePastDate()} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Time :</label>
              </td>
              <td>
                <input type="time" name="time" />
              </td>
            </tr>

            <tr>
              <td>
                <label>City :</label>
              </td>
              <td>
                <input type="text" name="city" />
              </td>
            </tr>
          </table>
          <button className="btn">Book</button>
        </form>
      </div>
      <Rating />
    </div>
  );
}
