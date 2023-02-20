import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'
export default function PageNotFound() {
    return (
        <div className='PageNotFoundComp'>
                <div>
                    <div className="starsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>
                <div className="lamp__wrap">
                    <div className="lamp">
                        <div className="cable"></div>
                        <div className="cover"></div>
                        <div className="in-cover">
                            <div className="bulb"></div>
                        </div>
                        <div className="light"></div>
                    </div>
                </div>
                <div className="error">
                    <div className="error__content">
                        <div className="error__message message">
                            <h1 className="message__title">(404) - Page Not Found</h1>
                            <p className="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                        </div>
                        
                    </div>
                    <Link to='autobots/home' className='notfoundbtn'><button className='btn'>Go to Home</button></Link>
                </div>
        </div>
    )
}
