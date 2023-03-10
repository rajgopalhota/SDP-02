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
            href="https://www.instagram.com/raja.2k3/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gopalpic} alt=""></img>
          </a>
          <p>
            <li>Animation effects & User Interface</li>
            <li>Modals and Side forms</li>
            <li>Payment Interface</li>
            <li>Products Page</li>
            Dolore ullam provident iste quibusdam blanditiis explicabo, sed
            laborum molestiae debitis aliquam, accusamus necessitatibus, placeat
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
            <li>Form management</li>
            <li>Server structure</li>
            <li>Data Fetching</li>
            Dolore ullam provident iste quibusdam blanditiis explicabo, sed
            laborum molestiae debitis aliquam, accusamus necessitatibus, placeat
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
            <li>Admin dashboard</li>
            Dolore ullam provident iste quibusdam blanditiis explicabo, sed
            laborum molestiae debitis aliquam, accusamus necessitatibus, placeat
          </p>
        </div>
      </div>
    </div>
  );
}
