import "./Admin.css";
import React from "react";
import { useAuth } from "../Middleware/auth";
import { Link  } from "react-router-dom";

export default function Toolbar() {
  const auth = useAuth();
  return (
    <div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Admin {auth.user}
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="tooltip-buttons">
            <Link to="/admin/overview">
              <button
                className="tooltip-btn-hover color-1"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-download"></i>&nbsp;&nbsp;Autobots
              </button>
            </Link>
            <Link to="/admin/contacts">
              <button
                className="tooltip-btn-hover color-2"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact
              </button>
            </Link>
            <Link to="/admin/registry">
              <button
                className="tooltip-btn-hover color-4"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-handshake"></i>&nbsp;&nbsp;Registry
              </button>
            </Link>
            <Link to="/admin/catalog">
              <button
                className="tooltip-btn-hover color-7"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-truck-fast"></i>&nbsp;&nbsp;Catalog
              </button>
            </Link>
            <Link to="/admin/community">
              <button
                className="tooltip-btn-hover color-9"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-comments"></i>&nbsp;&nbsp;Community
              </button>
            </Link>
            <Link to="/admin/users">
              <button
                className="tooltip-btn-hover color-10"
                data-bs-dismiss="offcanvas"
              >
                <i className="fa-solid fa-user-minus"></i>&nbsp;&nbsp;Users
              </button>
            </Link>
            <Link to='/autobots/home'>
              <button className="tooltip-btn-hover color-11">
                <i className="fa-solid fa-key"></i>&nbsp;&nbsp;Visit site
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
