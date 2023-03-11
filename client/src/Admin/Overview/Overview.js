import React, { useEffect } from "react";
import "./Overview.css";
import axios from "axios";
import { useState } from "react";
import { AutobotBackend } from "../../Middleware/Helper";
export default function Overview() {
  const [users, setUsers] = useState(0);
  const [purchase, setPurchase] = useState(0);
  const [comment, setComment] = useState(0);
  const [testride, setTestride] = useState(0);
  const [repair, setRepair] = useState(0);
  const [mail, setMail] = useState(0);
  useEffect(() => {
    axios
      .get(`${AutobotBackend}/admin/overview`, {})
      .then((response) => {
        setUsers(response.data.userlen);
        setPurchase(response.data.purchaselen);
        setComment(response.data.commentlen);
        setTestride(response.data.testridelen);
        setRepair(response.data.repairlen);
        setMail(response.data.maillen);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users, purchase, comment, testride, repair, mail]);

  return (
    <div>
      <div className="Overview">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-users"></i>
                <p>
                  Total Associated users<br/> <strong>{users}</strong>{" "}
                </p>
                <p className="overview-card-footer">USERS</p>
              </div>
            </div>
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>
                  Total Purchase<br/> <strong>{purchase}</strong>
                </p>
                <p className="overview-card-footer">PURCHASES</p>
              </div>
            </div>
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-paper-plane"></i>
                <p>
                  Community comments<br/> <strong>{comment}</strong>
                </p>
                <p className="overview-card-footer">COMMENTS</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-car-side"></i>
                <p>
                  Users Interested<br/> <strong>{testride}</strong>
                </p>
                <p className="overview-card-footer">Test Rides</p>
              </div>
            </div>
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-truck-fast"></i>
                <p>
                  Total Repair<br/> <strong>{repair}</strong>{" "}
                </p>
                <p className="overview-card-footer">Repairs</p>
              </div>
            </div>
            <div className="col">
              <div className="overview-card">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <p>
                  Daily mails we recieve<br/> <strong>{mail}</strong>{" "}
                </p>
                <p className="overview-card-footer">Mail services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
