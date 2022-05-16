import React, { Component } from 'react';

export default class ResetUserPassword extends Component {
    render() {
        return(
            <div>
                Welcome to reset your password! <br /> Please input the email associated with your account: <br />
                <input type="text" placeholder="Email" />
            </div>
        )
    };
};