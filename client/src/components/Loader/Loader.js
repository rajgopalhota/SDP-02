import React from 'react'
import './Loader.css'
export default function Loader() {
    return (
        <div className='LoaderBuffer'>
            <figure className="loading-loader">
                <div className="loading-dot loading-white"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </figure>
        </div>
    )
}
