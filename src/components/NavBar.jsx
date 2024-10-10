import React from 'react'
import logo from '../assets/images/logo.png'
import '../index.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const linkClass = ({isActive}) => isActive ? 'active-link' : 'nav-link'

  return (
    <>
      <nav>
        <div id='left-nav'>
          <img src={logo} alt="a logo" style={{width: '2.2em'}} />
          <p>React Jobs</p>
        </div>
        <ul id='right-nav'>
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/jobs" className={linkClass}>Jobs</NavLink></li>
          <li><NavLink to="/add-job" className={linkClass}>Add Jobs</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar