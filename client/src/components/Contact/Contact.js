import React, { useState } from 'react'
import './Styles/Contact.css'
import location from './Assets/location.png'
import email from './Assets/email.png'
import phone from './Assets/phone.png'
export default function Contact() {
    const [sub, setSub] = useState("contactcomp-input-container")
    const handleonsignin = () => {
        setSub("contactcomp-input-container focus");
    }

    return (
        <div className='ContactCont'>
            <div className="contactcomp-container">
                <img src="img/shape.png" className="contactcomp-square" alt="" />
                <div className="contactcomp-form">
                    <div className="contactcomp-contact-info">
                        <h3 className="contactcomp-title">Let's get in touch</h3>
                        <p className="contactcomp-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
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

                        <form action="" autocomplete="off" className='contactcomp-formtag'>
                            <h3 className="contactcomp-title">Contact us</h3>
                            <div className={sub}>
                                <input type="text" name="name" className="contactcomp-input" onClickCapture={handleonsignin} />
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className={sub}>
                                <input type="email" name="email" className="contactcomp-input" onClickCapture={handleonsignin} />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className={sub}>
                                <input type="tel" name="phone" className="contactcomp-input" onClickCapture={handleonsignin} />
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className={sub} textarea>
                                <textarea name="message" className="contactcomp-input" onClickCapture={handleonsignin}></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
