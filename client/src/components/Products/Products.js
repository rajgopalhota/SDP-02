import React from 'react'
import './Styles/Style.css'
import seat from './Assets/seat.png'
import inmirror from './Assets/inmirror.png'
import windmirror from './Assets/windmirror.jpg'
import redhead from './Assets/redhead.jpg'
import bluehead from './Assets/bluehead.jpg'
export default function Products() {
    return (
        <div className='ProductsPage'>
            <div className="product-container">
                {/* Card -1 */}
                <div className="product-card">
                    <div className="product-imgBx">
                        <img src={seat} alt="Seat" />
                    </div>
                    <div className="product-contentBx">
                        <h2>Nexa Seat</h2>
                        <div className="product-size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="product-color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/">Buy Now</a>
                    </div>

                </div>
                {/* Card one ends */}
                {/* Card -1 */}
                <div className="product-card">
                    <div className="product-imgBx">
                        <img src={inmirror} alt="Seat" />
                    </div>
                    <div className="product-contentBx">
                        <h2>Nexa Mirror</h2>
                        <div className="product-size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="product-color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/">Buy Now</a>
                    </div>

                </div>
                {/* Card one ends */}
                {/* Card -1 */}
                <div className="product-card">
                    <div className="product-imgBx">
                        <img src={windmirror} alt="Seat" />
                    </div>
                    <div className="product-contentBx">
                        <h2>Side Mirror</h2>
                        <div className="product-size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="product-color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/">Buy Now</a>
                    </div>

                </div>
                {/* Card one ends */}
                {/* Card -1 */}
                <div className="product-card">
                    <div className="product-imgBx">
                        <img src={redhead} alt="Seat" />
                    </div>
                    <div className="product-contentBx">
                        <h2>Red Headlight</h2>
                        <div className="product-size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="product-color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/">Buy Now</a>
                    </div>

                </div>
                {/* Card one ends */}
                {/* Card -1 */}
                <div className="product-card">
                    <div className="product-imgBx">
                        <img src={bluehead} alt="Seat" />
                    </div>
                    <div className="product-contentBx">
                        <h2>Blue Headlight</h2>
                        <div className="product-size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <div className="product-color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/">Buy Now</a>
                    </div>

                </div>
                {/* Card one ends */}
                
            </div>
        </div>
    )
}
