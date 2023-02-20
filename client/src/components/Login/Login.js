import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import log from './Images/log.svg'
import register from './Images/register.svg'
import './Styles/Index.css';
export default function Index() {
  const [ani, setAni] = useState("login-container")
  const handleonsignup = () => {
    setAni("login-container");
  }
  const handleonsignin = () => {
    setAni("login-container sign-up-mode");
  }
  window.addEventListener("focus", () => {
    document.title = "Login";
  })
  return (
    <div className='LoginMech'>
      <NavLink to="/autobots/home" ><div className="navigatetohome"><i class="fa fa-home" aria-hidden="true"></i></div></NavLink>
      <div className={ani}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">SIGN IN</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">SIGN UP</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input type="number" placeholder=" Phone number" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={handleonsignin}>
                Sign up
              </button>
            </div>
            <img src={log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={handleonsignup}>
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
