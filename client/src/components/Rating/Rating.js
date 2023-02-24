import React from 'react'
import './Rating.css'
export default function Rating() {
    return (
        <div className='Rating-container'>
            <h1>Rate your experience</h1>
            <div className="rating">
                <input type="radio" name="rating" value="5" id="5" /><label htmlFor="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" /><label htmlFor="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" /><label htmlFor="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" /><label htmlFor="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" /><label htmlFor="1">☆</label>
            </div>
        </div>
    )
}
