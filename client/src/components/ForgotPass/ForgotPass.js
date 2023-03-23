import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import "./Forgot.css";
import axios from "axios";
import { AutobotBackend } from "./../../Middleware/Helper";
import { toast } from "react-toastify";
export default function ForgotPass() {
  const [otp, setOtp] = useState(null);
  const [otp1, setOtp1] = useState(null);
  const [pass, setPass] = useState(null);
  const [email1, setEmail] = useState(null);
  const handleonchange = (event) => {
    console.log("onchange called");
    setEmail(event.target.value);
  };
  const handleonchange1 = (event) => {
    console.log("onchange called");
    setOtp1(event.target.value);
  };
  // const sendMail = (rec_otp) => {
  //   emailjs.sendForm(
  //     "service_oimlnyo",
  //     "template_kn99fmn",
  //     rec_otp,
  //     "CfBnzw04m68b8ddk0"
  //   );
  // };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function otpsaving(rec_otp, username) {
    axios
      .post(`${AutobotBackend}/auth/otp`, {
        otp: rec_otp,
        username: username,
      })
      .then((response) => {
        console.log("xcvb");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server error");
      });
  }
  const handleotp = (e) => {
    e.preventDefault();
    axios
      .get(`${AutobotBackend}/auth/otpget`, {
        params: {},
      })
      .then((response) => {
        setOtp(response.data.otp)
        console.log(otp)
        if(Number(otp)===Number(otp1)){
          toast.success("OTP verified");
           setPass("XYZ");
           console.log(pass);
        }else{
          toast.success("OTP not verified");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleemail = (e) => {
    e.preventDefault();
    axios
      .post(`${AutobotBackend}/auth/email`, {
        email: email1,
      })
      .then((response) => {
        if (response.data.emailfound === "emailfound") {
          const username = response.data.username;
          const rec_otp = getRndInteger(1000, 9999);
          otpsaving(rec_otp, username);
          //sendMail(rec_otp);
          console.log(rec_otp);
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
      <div class="forgot-background">
        <div class="forgot-shape"></div>
        <div class="forgot-shape"></div>
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
              id="password"
            />
            <button type="submit">Change Password</button>
          </>
        )}
      </form>
    </div>
  );
}
