import React, { Component } from 'react';

export default class SignUserUp extends Component {
    render() {
        return(
            <div>
                <p>Welcome to Sign User Up</p>
                <p>Email: </p>
                <input type="text" placehodler="Email" />
                <br />
                <p>Username: </p>
                <input type="text" placeholder="Username" />   
                <br />
                <p>Password: </p>
                <input type="password" placeholder="Password" />
                <br />
                <br />
                <button><em>SIGN UP NOW</em></button>
            </div>
        )
    };
};