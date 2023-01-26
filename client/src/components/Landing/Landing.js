import React from 'react'
import './Landing.css'
// import { Link } from 'react-router-dom'
export default function Landing() {
    return (
        <div className='body'>
            <div className="background-one">
                <div className="link-container">
                    <a className="link-one" href="/home">Home</a>
                </div>
            </div>
            <div className="background-two link-container">
                <a className="link-two" href="/contact">Support</a>
            </div>
            <div className="background-three link-container">
                <a className="link-three" href="/login">Login</a>
            </div>
        </div>
    )
}
