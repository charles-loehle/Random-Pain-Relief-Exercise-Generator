import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const hideNav = function () {
    console.log('clicked');
    document.querySelector('.navbar-collapse').style.display = 'none';
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* NavLink adds an active class to clicked link */}
            <NavLink
              className="nav-link"
              exact to='/'
              onClick={hideNav}
            >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main" onClick={hideNav}>Main App</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar;