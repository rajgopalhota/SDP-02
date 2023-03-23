import React, { useState } from 'react'
import './Forgot.css'
export default function ForgotPass() {
    const [otp, setOtp] = useState(true);
    const [pass, setPass] = useState(true);
    return (
        <div>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
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
