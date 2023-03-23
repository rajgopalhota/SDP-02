import React, { useState  } from 'react'
import emailjs from "@emailjs/browser";
import './Forgot.css'
export default function ForgotPass() {
    const sendMail = (rec_otp) =>{
        emailjs
        .sendForm(
          "service_oimlnyo",
          "template_kn99fmn",
          rec_otp,
          "CfBnzw04m68b8ddk0"
        )
    }
    const [otp, setOtp] = useState(null);
    const [pass, setPass] = useState(null);
    return (
        <div className='forotcontainer'>
            <div class="forgot-background">
                <div class="forgot-shape"></div>
                <div class="forgot-shape"></div>
            </div>
            <form className='box'>
                <h3>RESET PORTAL</h3>
                <p>Enter your associated email.</p>
                {
                    !otp && !pass &&
                    <>
                        <input type="email" placeholder="Enter your Email" name='useremail' />
                        <button type='submit'>Send OTP</button>
                    </>
                }
                {
                    otp && !pass &&
                    <>
                    <input type="number" placeholder="Enter OTP" />
                    <button type='submit'>Verify OTP</button>
                    </>
                }
                {
                    pass && otp &&
                    <>
                    <input type="password" placeholder="Password" id="password" />
                    <button type='submit'>Change Password</button>
                    </>
                }
            </form>
        </div>
    )
}
