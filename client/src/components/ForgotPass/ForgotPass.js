import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import "./Forgot.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AutobotBackend } from "./../../Middleware/Helper";
import { toast } from "react-toastify";
export default function ForgotPass() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(null);
  const [otp1, setOtp1] = useState();
  const [pass, setPass] = useState(null);
  const [pass1, setPass1] = useState();
  const [email, setEmail] = useState();
  const [userreq, setUserreq] = useState();
  const handleonchange = (event) => {
    setEmail(event.target.value);
  };
  const handleonchange1 = (event) => {
    // console.log("onchange called");
    setOtp1(event.target.value);
  };
  const handleonchange2 = (event) => {
    setPass1(event.target.value);
  };
  // const sendMail = (rec_otp) => {
  //   emailjs.sendForm(
  //     "service_oimlnyo",
  //     "template_kn99fmn",
  //     <form>{rec_otp}</form>,
  //     "CfBnzw04m68b8ddk0"
  //   );
  // };

  //random otp generator
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //saving otp in database
  function otpsaving(rec_otp, username) {
    axios
      .post(`${AutobotBackend}/auth/otp`, {
        otp: rec_otp,
        username: username,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
        toast.error("Server error");
      });
  }
  //getting otp from database
  const handleotp = (e) => {
    e.preventDefault();
    axios
      .get(`${AutobotBackend}/auth/otpget`, {
        params: {},
      })
      .then((response) => {
        setOtp(response.data.otp);
        if (Number(otp) === Number(otp1)) {
          toast.success("OTP verified");
          setPass("XYZ");
        } else {
          toast.success("OTP not verified");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handling password change
  const handlePassReset = (e) => {
    e.preventDefault();
    axios
      .post(`${AutobotBackend}/auth/changepass`, {
        params: {},
        username: userreq,
        passwordnew: pass1,
      })
      .then((response) => {
        if (response.data === "changed") {
          toast.success("Password Changed ");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //checking email is present or not
  const handleemail = (e) => {
    e.preventDefault();
    axios
      .post(`${AutobotBackend}/auth/email`, {
        email: email,
      })
      .then((response) => {
        if (response.data.emailfound === "emailfound") {
          const username = response.data.username;
          const rec_otp = getRndInteger(1000, 9999);
          setUserreq(username);
          otpsaving(rec_otp, username);
          // sendMail(rec_otp);
          console.log("your otp is:", rec_otp);
          setOtp(rec_otp);
        } else {
          toast.error("Email not found");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server error");
      });
  };

  return (
    <div className="forotcontainer">
      <div className="forgot-background">
        <div className="forgot-shape"></div>
        <div className="forgot-shape"></div>
      </div>
      <form className="box">
        <h3>RESET PORTAL</h3>
        <p>Enter your associated email.</p>
        {!otp && !pass && (
          <>
            <input
              type="email"
              placeholder="Enter your Email"
              name="useremail"
              onChange={handleonchange}
            />
            <button type="submit" onClick={handleemail}>
              Send OTP
            </button>
          </>
        )}
        {otp && !pass && (
          <>
            <input
              type="number"
              placeholder="Enter OTP"
              name="usrotp"
              onChange={handleonchange1}
            />
            <button type="submit" onClick={handleotp}>
              Verify OTP
            </button>
          </>
        )}
        {pass && (
          <>
            <input
              type="password"
              placeholder="Password"
              name="usrpass"
              onChange={handleonchange2}
            />
            <button type="submit" onClick={handlePassReset}>
              Change Password
            </button>
          </>
        )}
      </form>
    </div>
  );
}
