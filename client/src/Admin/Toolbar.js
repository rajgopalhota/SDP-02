import './Admin.css'
import React from 'react'
import { useAuth } from '../Middleware/auth'

export default function Toolbar() {
  const auth = useAuth();
  return (
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Admin  {auth.user}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body-md" >
          <div class="tooltip-buttons">
            <button class="tooltip-btn-hover color-1"><i class="fa-solid fa-download"></i>&nbsp;&nbsp;Autobots</button>
            <button class="tooltip-btn-hover color-2"><i class="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact</button>
            <button class="tooltip-btn-hover color-4"><i class="fa-solid fa-handshake"></i>&nbsp;&nbsp;Registry</button>
            <button class="tooltip-btn-hover color-7"><i class="fa-solid fa-truck-fast"></i>&nbsp;&nbsp;Catalog</button>
            <button class="tooltip-btn-hover color-9"><i class="fa-solid fa-comments"></i>&nbsp;&nbsp;Community</button>
            <button class="tooltip-btn-hover color-10"><i class="fa-solid fa-user-minus"></i>&nbsp;&nbsp;Users</button>
            <button class="tooltip-btn-hover color-11"><i class="fa-solid fa-key"></i>&nbsp;&nbsp;Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
