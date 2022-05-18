import React, { Component } from 'react';
import './LogUserIn.css';

export default class ResetUserPassword extends Component {
    render() {
        return(
            <div className="contGrid">
                <div className="logIn giveBorder">
                    <p>Welcome to reset your password!</p>
                    <form name="Password Reset">
                        <label for="email">Input Account Email: </label>
                        <input type="text" placeholder="Email" />
                        <br />
                        <input type="checkbox" />
                        <label for="check">Are you sure?</label>
                        <br />
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div className="picture giveBorder">
                    picture
                </div>
                <div className="footer giveBorder">
                    Footer
                </div>
            </div>
        )
    };
};