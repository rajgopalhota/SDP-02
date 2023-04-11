import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from './Collection/pic1.jpg'
import pic2 from './Collection/pic2.jpg'
import pic3 from './Collection/pic3.jpg'
import pic4 from './Collection/pic4.jpg'
import pic5 from './Collection/pic5.jpg'

import './Landing.css'
export default function Landing() {
    return (
        <div className='bodyland'>
            <div className="landbtn-container">
                <div className="landbtn-btn"><Link to="/autobots/home">AUTOBOTS</Link></div>
                <div className="landbtn-btn"><Link to="/community" >COMMUNITY</Link></div>
                <div className="landbtn-btn"><Link to="/login" >LOGIN</Link></div>
            </div>
            <div className="landing-slider">
                <figure>
                    <img src={pic5} alt="" />
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                    <img src={pic4} alt="" />
                </figure>
            </div>
            <div className="welcomenoteland">
                <h1>Welcome to Autobots</h1>
                <p>
                    We are pleased to invite you to register with Autobots, the leading automobile company in the industry.
                </p>
            </div>
        </div>
    )
}
