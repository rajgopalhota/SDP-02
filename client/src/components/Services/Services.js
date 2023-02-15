import React from "react";
import "./Styles/repair.css";
export default function Repair() {
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()+1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <div>
      <div className="repair-container ">
        <h1>Welocme to Autobots Repair Services</h1>
        <form action="" method="post">
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
                <input type="date" name='date' min={disablePastDate()} />
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
    </div>
  );
}
