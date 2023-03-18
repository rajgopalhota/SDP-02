import React, { useState,useRef} from "react";
import "./Styles/Contact.css";
import location from "./Assets/location.png";
import email from "./Assets/email.png";
import phone from "./Assets/phone.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import {AutobotBackend} from './../../Middleware/Helper'
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });


  const [sub, setSub] = useState("contactcomp-input-container");
  const handleonsignin = () => {
    setSub("contactcomp-input-container focus");
  };

  const handlecontact = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_oimlnyo",
      "template_t9e1dfq",
      form.current,
      "CfBnzw04m68b8ddk0"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );


    const data = new FormData(e.currentTarget);
    axios
      .post(`${AutobotBackend}/api/contact`, {
        username: data.get("name").split(" ").join("").toLowerCase(),
        email: data.get("email"),
        phone: data.get("phone"),
        message: data.get("message"),
      })
      .then((response) => {
        if (response.data === "notvalidname") {
          toast.info("Enter valid username", {
            position: "bottom-right",
          });
        } else if (response.data === "notvalidemail") {
          toast.info("Enter valid Email", {
            position: "bottom-right",
          });
        } else if (response.data === "nophone") {
          toast.info("Please enter PhoneNumber", {
            position: "bottom-right",
          });
        } else if (response.data === "nomsg") {
          toast.info("Please enter Message", {
            position: "bottom-right",
          });
        } else {
          toast.info("Thank you for contacting Us", {
            position: "bottom-right",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server not started, Please wait", {
          position: "bottom-right",
        });
      });
  };

  return (
    <div className="ContactCont">
      <div className="contactcomp-container">
        <img src="img/shape.png" className="contactcomp-square" alt="" />
        <div className="contactcomp-form">
          <div className="contactcomp-contact-info">
            <h3 className="contactcomp-title">Let's get in touch</h3>
            <p className="contactcomp-text">
              Thank you for choosing Autobot as your go-to destination for all
              your automobile and spare parts needs. We look forward to serving
              you and providing you with the best products and services in the
              industry.
            </p>

            <div className="contactcomp-info">
              <div className="contactcomp-information">
                <img src={location} className="contactcomp-icon" alt="" />
                <p> KL University, Vijayawada, 522502</p>
              </div>
              <div className="contactcomp-information">
                <img src={email} className="contactcomp-icon" alt="" />
                <p>raja@gmail.com</p>
              </div>
              <div className="contactcomp-information">
                <img src={phone} className="contactcomp-icon" alt="" />
                <p>767-207-5313</p>
              </div>
            </div>

            <div className="contactcomp-social-media">
              <p>Connect with us :</p>
              <div className="contactcomp-social-icons">
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contactcomp-contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
            ref={form}
              onSubmit={handlecontact}
              autoComplete="off"
              className="contactcomp-formtag"
            >
              <h3 className="contactcomp-title">Contact us</h3>
              <div className={sub}>
                <input
                  type="text"
                  name="name"
                  className="contactcomp-input"
                  onClickCapture={handleonsignin}
                  {...register("name", {
                    required: "username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be atleast 3 characters long...",
                    },
                    maxLength: {
                      value: 30,
                      message: "Username must be atmost 30 characters long...",
                    },
                  })}
                />
                <p id="kliu">{errors.name?.message}</p>
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className={sub}>
                <input
                  type="text"
                  name="email"
                  className="contactcomp-input"
                  onClickCapture={handleonsignin}
                  {...register("email", {
                    required: "Email is Required...",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email must be valid",
                    },
                  })}
                />
                <p id="kliu">{errors.email?.message}</p>
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className={sub}>
                <input
                  type="tel"
                  name="phone"
                  className="contactcomp-input"
                  onClickCapture={handleonsignin}
                  {...register("phone", {
                    required: "phone is Required...",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Must be valid",
                    },
                  })}
                />
                <p id="kliu">{errors.phone?.message}</p>

                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className={sub}>
                <textarea
                  name="message"
                  className="contactcomp-input"
                  onClickCapture={handleonsignin}
                  {...register("message", {
                    required: "message is required",
                    minLength: {
                      value: 15,
                      message: "message must be atleast 15 characters long...",
                    },
                  })}
                ></textarea>
                <p id="kliu">{errors.message?.message}</p>

                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="contact-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
