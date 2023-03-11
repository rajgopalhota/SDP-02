import React from 'react'
import { Link } from 'react-router-dom'
import vid from './Assets/admin.mp4'
import './Admin.css'
import Toolbar from './Toolbar'
import { useAuth } from '../Middleware/auth'
export default function Admin() {
  const auth = useAuth();
  return (
    <div>
      <div className="vidbackground">
        <video autoPlay muted loop id="myVideo" >
          <source src={vid} type="video/mp4" / >
        </video>
      </div>
      <div className="adminwelcome">
        <h1>Welcome Mr. {auth.user}</h1>
        <h2>Experience the power of Autobots</h2>
        <h1>"Admin magic at your service."</h1>
      </div>
      <div className="tooltipadmin">
        <div className="historybtns">
          <div className="history-btn"><Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
          </Link></div>
        </div>
      </div>
      <Toolbar />
    </div>
  )
}
