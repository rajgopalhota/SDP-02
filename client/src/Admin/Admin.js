import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Admin.css'
import Toolbar from './Toolbar'
import vid from './Assets/admin.mp4'


export default function Admin() {
  return (
    <div>
      <div className="vidbackground">
        <video autoPlay muted loop id="myVideo" >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="tooltipadmin">
        <div className="historybtns">
          <div className="history-btn"><Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
          </Link></div>
        </div>
      </div>
      <Toolbar />
      <Outlet />

    </div>
  )
}
