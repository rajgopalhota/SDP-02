import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import log from "./Images/audi.png";
import register from "./Images/mercedes.png";
import { useAuth } from "../../Middleware/auth";
import Loader from './../Loader/ButtonLoad'
import "./Styles/Index.css";
import axios from "axios";
import {AutobotBackend} from './../../Middleware/Helper'
import { toast } from "react-toastify";

export default function Index() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoad(null);
    const data = new FormData(e.currentTarget);
    axios
      .post(`${AutobotBackend}/auth/register`, {
        username: data.get("reguser").split(" ").join("").toLowerCase(),
        email: data.get("regemail"),
        phone: data.get("regphone"),
        password: data.get("regpassword"),
        gender: data.get("gender"),
      })
      .then((response) => {
        setLoad(true);
        if (response.data === "userexist") {
          toast.info("Username taken", {
            position: "bottom-right",
          });
        }
        else if (response.data === "phoneexist") {
          toast.info("Phone number already is in use", {
            position: "bottom-right",
          });
        }
        else if (response.data === "emailexist") {
          toast.info("Email already taken", {
            position: "bottom-right",
          });
        }
        else {
          toast.info("Registration Successfull", {
            position: "bottom-right",
          });
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server not started, Please wait", {
          position: "bottom-right",
        })
      });
  };

  // Login Handler
  const loginAction = (e) => {
    e.preventDefault();
    setLoad(null);
    const data = new FormData(e.currentTarget);
    axios
      .post(`${AutobotBackend}/auth/login`, {
        username: data.get("loginuser").split(" ").join("").toLowerCase(),
        password: data.get("loginpassword"),
      })
      .then((response) => {
        console.log(response);
        setLoad(true);
        if (response.data === "newuser") {
          toast.error("Please register to Autobots", {
            position: "bottom-right",
          });
        }
        else if (response.data === "invalid") {
          toast.info("Enter correct password", {
            position: "bottom-right",
          });
        }
        else {
          if (response.status === 200) {
            if (response.data.role === "Customer") {
              const username = response.data.username;
              // const authtoken = response.data.token;
              console.log(response.data)
              localStorage.setItem('user', response.data.username);
              localStorage.setItem('role', response.data.role);
              // console.log(localStorage.getItem('user'));
              auth.login(username);
              navigate("/autobots/home");
              toast.success("Login Successfull", {
                position: "bottom-right",
                theme: "dark",
              });
            }
            else if(response.data.role === "Admin"){
              const username = response.data.username;
              console.log(response.data)
              localStorage.setItem('user', response.data.username);
              localStorage.setItem('role', response.data.role);
              auth.login(username);
              navigate("/admin");
              toast.success("Login Successfull", {
                position: "bottom-right",
                theme: "dark",
              });
            }
          }
          
          else if (response.data === "invalid") {
            if (response.data.message === "unsuccess") {
              toast.error("Login error", {
                position: "bottom-right",
                theme: "dark",
              });
            }
          }
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
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
      </NavLink>
      <div className={ani}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={loginAction} className="sign-in-form">
              <h2 className="title">SIGN IN</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="loginuser" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="loginpassword"
                  required
                />
              </div>
              {
                load &&
                <input type="submit" value="Login" className="login-btn solid" />
              }
              {
                !load &&
                <Loader />
              }
              <Link to="/forgotpass" ><p className="social-text">Forgot password?</p></Link>
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
                <input type="text" placeholder="Username" name="reguser" required />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" name="regemail" required />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  placeholder=" Phone number"
                  name="regphone"
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="regpassword"
                  required
                />
              </div>
              <div className="input-field-radio">
                <span>Gender</span>
                <input type="radio" id="html" name="gender" value="Male" />
                <label htmlFor="html">Male</label>
                <input type="radio" id="css" name="gender" value="Female" />
                <label htmlFor="css">Female</label>
              </div>
              {
                load &&
                <input type="submit" className="login-btn" value="Sign up" />
              }
              {
                !load &&
                <Loader />
              }
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
                Thank you for choosing Autobot as your go-to destination for all your automobile and spare parts needs.

              </p>
              <button
                className="login-btn transparent"
                id="sign-up-login-btn"
                onClick={handleonsignin}
              >
                Sign up
              </button>
            </div>
            <img src={log} className="image logimg" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                We are pleased to invite you to register with Autobots, the leading automobile company in the industry.
              </p>
              <button
                className="login-btn transparent"
                id="sign-in-login-btn"
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
