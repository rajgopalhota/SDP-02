import React from 'react'
import './Overview.css'
export default function Overview() {
    return (
        <div>
            <div className='Overview'>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-users"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">USERS</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">PURCHASES</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-paper-plane"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">COMMENTS</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-car-side"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">Test Rides</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-truck-fast"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">Repairs</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="overview-card">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                                <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>
                                <p class="overview-card-footer">Mail services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
