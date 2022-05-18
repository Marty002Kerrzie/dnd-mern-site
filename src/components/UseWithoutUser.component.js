import React, { Component } from 'react';
import './LogUserIn.css';

export default class UseWithoutUser extends Component {
    render() {
        return(
            <div className="contGrid">
                <div className="logIn giveBorder">
                     While you are free to use the site without an account, you can always make one
                     <a href="../SignUserUp" className="coolLink"> HERE </a>
                    <form name="Username">
                        <label for="username">Enter temporary username:</label>
                        <input type="text" placeholder="Username" />
                        <br />
                        <label for="continue button" />
                        <button>CONTINUE</button>
                    </form>
                </div>
                <div className="picture giveBorder">
                    picture
                </div>
                <div className="footer giveBorder">
                    footer
                </div>
            </div>
        )
    };
};