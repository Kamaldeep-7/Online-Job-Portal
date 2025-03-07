import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const Header = () => {
    const {Logout}=useContext(AuthContext)
    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
                >
                    <h1 className="m-0 text-primary">JobEntry</h1>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link">
                            Home
                        </NavLink>
                        <NavLink to="about/" className="nav-item nav-link">
                            About
                        </NavLink>
                        <div className="nav-item dropdown">
                            <NavLink
                                to="jobs/"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Jobs
                            </NavLink>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="joblist/" className="dropdown-item">
                                    Job List
                                </Link>
                            
                            </div>
                        </div>
                        <NavLink to="services/" className="nav-item nav-link">
                            Services
                        </NavLink>
                      
                        <NavLink to="contact/" className="nav-item nav-link">
                            Contact
                        </NavLink>
                        {sessionStorage.getItem("token") ?
                            <>
                                {/* <li><Link onClick={Logout} class="nav-item nav-link">Logout</Link></li> */}
                                <Link onClick={Logout} class="nav-item nav-link ">Logout</Link>
                            </>
                            :
                            <>
                                <Link to="/Login/" class="nav-item nav-link ">Login</Link>
                                <Link to="/register/" class="nav-item nav-link ">Register</Link>
                            </>
                        }
                    </div>
                    <Link
                        to="/"
                        className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
                    >
                        Post A Job
                        <i className="fa fa-arrow-right ms-3" />
                    </Link>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}

export default Header
