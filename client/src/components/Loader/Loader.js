import React from 'react'
import './Loader.css'
export default function Loader() {
    return (
        <div className='LoaderBuffer'>
            <figure class="loading-loader">
                <div class="loading-dot loading-white"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </figure>
        </div>
    )
}
