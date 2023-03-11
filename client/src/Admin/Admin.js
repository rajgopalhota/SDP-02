import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
import Toolbar from './Toolbar'
export default function Admin() {
  return (
    <div>
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
