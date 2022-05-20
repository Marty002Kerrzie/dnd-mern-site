import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">DND site</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/SignUserUp" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/LogUserIn" className="nav-link">Log In</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/ResetUserPassword" className="nav-link">Forgot Password</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/UseWithoutUser" className="nav-link">Use Without Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;