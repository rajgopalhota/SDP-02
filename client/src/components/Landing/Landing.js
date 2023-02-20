import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
export default function Landing() {
    return (
        <div className='bodyland'>
            <div className="background-one">
                <div className="link-container">
                    <Link className="link-one" to="/autobots/home"><div className="rjbx">Home</div></Link>
                </div>
            </div>
            <div className="background-two link-container">
                <Link className="link-two" to="/community"><div className="rjbx">Support</div></Link>
            </div>
            <div className="background-three link-container">
                <Link className="link-three" to="/login"><div className="rjbx">Login</div></Link>
            </div>
        </div>
    )
}
