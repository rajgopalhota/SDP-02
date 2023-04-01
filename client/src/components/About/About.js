import React from "react";
import "./Style.css";
import rajpic from "./images/my pic.jpg";
import gopalpic from "./images/gopalpic.jpg";
import manojpic from "./images/manoj.jpg";
export default function About() {
  return (
    <div className="Aboutani">
      <div className="aboutmove1">
        <div className="abt-container box">
          
          <a
            href="https://www.linkedin.com/in/rajgopalhota/"
            target="_blank"
            rel="noreferrer"
          >
            RAJGOPAL HOTA
          </a>
          <a
            href="https://www.instagram.com/rajgopal.hota/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gopalpic} alt=""></img>
          </a>
          <p>
            <li>Animation effects & User Interface</li>
            <li>Admin Dashboard UI</li>
            <li>Modals and Side forms</li>
            <li>Payment Interface & Server management</li>
            <li>Products Page</li>
            Responsible for leading a team and ensuring that the web application is developed according to the requirements and specifications
          </p>
        </div>
      </div>
      <div className="aboutmove2">
        <div className="abt-container1 box">

          <a
            href="https://www.linkedin.com/in/raja-esha-hari-shanmuka-rajendra-772689248/"
            target="_blank"
            rel="noreferrer"
          >
            RAJA RAJENDRA
          </a>
          <a
            href="https://www.instagram.com/raja_.rajendra_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={rajpic} alt=""></img>
          </a>

          <p>
            <li>Services dept</li>
            <li>Form management & Messaging</li>
            <li>OTP verification </li>
            <li>Data Fetching</li>
            <li>Connectivity with backend</li>
            Responsible for building and maintaining the server-side of web applications, including the server, database, and APIs.
          </p>
        </div>
      </div>
      <div className="aboutmove3">
        <div className="abt-container2 box">
          
          <a
            href="https://www.linkedin.com/in/manojnaraharisetti/"
            target="_blank"
            rel="noreferrer"
          >
            NARAHARISETTI MANOJ
          </a>
          <a
            href="https://www.instagram.com/_mn.2k4_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={manojpic} alt=""></img>
          </a>
          <p>
            <li>Cart page</li>
            <li>Data models</li>
            <li>Form validation</li>
            <li>Admin Tables</li>
            <li>Email management</li>
            Responsible for managing online forms, ensuring their proper functioning, including sending and receiving emails. 
          </p>
        </div>
      </div>
    </div>
  );
}
