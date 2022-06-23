import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light' ? 'dark' : 'light'}`} to="#">{props.title}</Link>
    {/* <a className={`navbar-brand text-${props.mode==='light' ? 'dark' : 'light'}`} href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light' ? 'dark' : 'light'}`} aria-current="page" to="/home">{props.home}</Link>
          {/* <a className={`nav-link active text-${props.mode==='light' ? 'dark' : 'light'}`} aria-current="page" href="#">{props.home}</a> */}
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light' ? 'dark' : 'light'}`} to="/about">{props.about}</Link>
          {/* <a className={`nav-link text-${props.mode==='light' ? 'dark' : 'light'}`} href="/about">{props.about}</a> */}
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li> */}
        
      </ul>

    </div>
    <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.EnableDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    

  </div>
</nav>
  )
}

Navbar.propTypes={title: PropTypes.string.isRequired,
                  about: PropTypes.string.isRequired,
                home: PropTypes.string.isRequired
            }
Navbar.defaultProps={
    title: 'Set Title',
    about: 'Set About',
    home: 'Set About'                      
}