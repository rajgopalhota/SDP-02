import React from 'react'
import './Landing.css'
// import { Link } from 'react-router-dom'
export default function Landing() {
    return (
        <div className='body'>
            <div class="wrapper">
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
                <div><span class="dot"></span></div>
            </div>
            <div className="background-one">
                <div className="link-container">
                    <a className="link-one" href="/home"><div className="rjbx">Home</div></a>
                </div>
            </div>
            <div className="background-two link-container">
                <a className="link-two" href="/contact"><div className="rjbx">Support</div></a>
            </div>
            <div className="background-three link-container">
                <a className="link-three" href="/login"><div className="rjbx">Login</div></a>
            </div>
        </div>
    )
}
