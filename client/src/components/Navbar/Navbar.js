import React from 'react'
import {Link} from 'react-router-dom';
import logo from './Assets/NavLogo.jpg';
import './Styles/Navbar.css'

export default function Navbar(props) {
  return (
    <div>
      <section></section>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt='' width={65}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-titles">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/autobots">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="spare">Spare</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="aboutus">About</Link>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit"><Link to="/login">Login</Link></button>
          </div>
        </div>
      </nav>
    </div>
  )
}
