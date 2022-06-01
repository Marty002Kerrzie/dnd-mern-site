import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaDizzy} from 'react-icons/fa'

const Navbar = () => {

    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">DND ToolBOX</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/SignUserUp" className="nav-link">
                            <FaUser />Sign Up</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/LogUserIn" className="nav-link">
                            <FaSignInAlt /> Log In</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/ResetUserPassword" className="nav-link">
                            <FaDizzy />Forgot Password</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/UseWithoutUser" className="nav-link">
                            <FaSignOutAlt />Use Without Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;