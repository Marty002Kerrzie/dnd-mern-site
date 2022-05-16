import React, { Component } from 'react';

export default class LogUserIn extends Component {
    render() {
        return(
            <div>
                <p>Username: </p>
                <input type="text" placeholder="Username" />   
                <br />
                <p>Password: </p>
                <input type="password" placeholder="Password" />
                <br />
            </div>
        )
    };
};