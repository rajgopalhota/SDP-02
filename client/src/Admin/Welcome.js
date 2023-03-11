import React from 'react'
import { useAuth } from '../Middleware/auth'

export default function Welcome() {
    const auth = useAuth();
    return (
        <div>
            <div className="adminwelcome">
                <h1>Welcome Mr. {auth.user}</h1>
                <h2>Experience the power of Autobots</h2>
                <h1>"Admin magic at your service."</h1>
            </div>
        </div>
    )
}
