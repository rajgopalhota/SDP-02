import React, { useState } from 'react'
import './Forgot.css'
export default function ForgotPass() {
    const [otp, setOtp] = useState(null);
    const [pass, setPass] = useState(null);
    return (
        <div>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className='box'>
                <h3>RESET PORTAL</h3>
                <p>Enter your associated email.</p>

                <input type="email" placeholder="Enter your Email" name='useremail' />
                {
                    otp &&
                    <input type="number" placeholder="Enter OTP" />
                }
                {
                    pass && otp &&
                    <input type="password" placeholder="Password" id="password" />
                }
                {
                    !otp &&
                    <button type='submit'>Send OTP</button>
                }
                {
                    !pass && otp &&
                    <button type='submit'>Verify OTP</button>
                }
                {
                    pass && otp &&
                    <button type='submit'>Change Password</button>
                }
            </form>
        </div>
    )
}
