import React, { Component } from 'react';
import './LogUserIn.css';

export default class LogUserIn extends Component {
    render() {
        return(
            <div className="contGrid">
                <div className="logIn giveBorder">
                    <p>Welcome to the Log In page:</p>
                    <form name="LOG IN">
                        <label for="Username">Username: </label>
                        <input type="text" placeholder="Username" />   
                        <br />
                        <label for="password">Password: </label>
                        <input type="password" placeholder="Password" />
                        <br />
                        <button>LOG IN</button>
                    </form>
                </div>
                <div className="picture giveBorder">
                    PICTURE
                </div>
                <div className="footer giveBorder">
                    FOOTER
                </div>
            </div>
        )
    };
};