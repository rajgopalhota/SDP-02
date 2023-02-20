import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./Assets/NavLogo.jpg";
import cartlogo from "./Assets/carts.png";
import "./Styles/Navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <section></section>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/autobots/home">
            <img src={logo} alt="" width={65}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-titles">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="spare">
                  Spare
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="aboutus">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="darkmode">
            <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
                </div>
            <div className="navcart">
              <NavLink className="nav-link" to="cart">
                <img src={cartlogo} alt="" width={42}></img>
                <span>&nbsp;Cart</span>
              </NavLink>
              {/*  */}
            </div>
            <NavLink to="/login">
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
