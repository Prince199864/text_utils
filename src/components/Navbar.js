import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        < nav className={`navbar navbar-expand-lg bg-body-tertiary bg-dark`} data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PJ-Tools</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other Tools
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">To-Do List</Link></li>
                                <li><Link className="dropdown-item" to="/">Service 2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Find more Services</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={`mx-3 d-flex  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <i className="bi bi-brightness-high-fill"></i>
                        <div className={`form-check form-switch mx-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        </div>
                        <i className="bi bi-moon-stars-fill"></i>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
Navbar.propTypes = {
    homeText: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    homeText: 'DefaultHome',
    aboutText: 'DefaultAboutUs'
}