import React from 'react'
import { Outlet } from 'react-router-dom';
import './Styles/MainStyle.css'
import Navbar from '../Navbar/Navbar'
import Alert from '../Alert';
export default function Autobot(props) {
  return (
    <div>
      
      <Navbar />
      <Alert alert={props.alert} />
      <Outlet />
    </div>
  )
}
