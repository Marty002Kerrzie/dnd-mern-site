import React, { Component } from 'react';
import './LogUserIn.css';

export default class SignUserUp extends Component {
    render() {
        return(
            <div className="contGrid">
                <div className="logIn giveBorder">
                    <p>Welcome to Sign User Up</p>
                    <form name ="Sign Up">
                        <label for="Email">Email: </label>
                        <input type="text" placeholder="Email" />
                        <br />
                        <label for="Username">Username: </label>
                        <input type="text" placeholder="Username" />   
                        <br />
                        <label for="Password">Password: </label>
                        <input type="password" placeholder="Password" />
                        <br />
                        <button>SIGN UP NOW</button>
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