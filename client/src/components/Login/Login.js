import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import log from "./Images/log.svg";
import { useAuth } from "././../auth";
import register from "./Images/register.svg";
import "./Styles/Index.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Index() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    axios
      .post("http://localhost:2003/api/register", {
        username: data.get("reguser"),
        email: data.get("regemail"),
        phone: data.get("regphone"),
        password: data.get("regpassword"),
      })
      .then((response) => {
        window.location.reload();
        toast.info("Registration Successfull", {
          position: "bottom-right",
          theme: "dark",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Login Handler
  const loginAction = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    axios
      .post("http://localhost:2003/api/login", {
        username: data.get("loginuser"),
        password: data.get("loginpassword"),
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.role === "Customer") {
            const username = response.data.username;
            console.log(username);
            auth.login(username);
            navigate("/autobots/home");
            toast.success("Login Successfull", {
              position: "bottom-right",
              theme: "dark",
            });
          }
        } else {
          navigate("/autobots/contact");
        }
      })
      .catch((e) => console.log(e));
  };

  const [ani, setAni] = useState("login-container");
  const handleonsignup = () => {
    setAni("login-container");
  };
  const handleonsignin = () => {
    setAni("login-container sign-up-mode");
  };
  window.addEventListener("focus", () => {
    document.title = "Login";
  });
  return (
    <div className="LoginMech">
      <NavLink to="/autobots/home">
        <div className="navigatetohome">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
      </NavLink>
      <div className={ani}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={loginAction} className="sign-in-form">
              <h2 className="title">SIGN IN</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="loginuser" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="loginpassword"
                />
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
            {/* Signup form........... */}
            <form onSubmit={handleRegister} className="sign-up-form">
              <h2 className="title">SIGN UP</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="reguser" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" name="regemail" />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  placeholder=" Phone number"
                  name="regphone"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="regpassword"
                />
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleonsignin}
              >
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
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleonsignup}
              >
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
