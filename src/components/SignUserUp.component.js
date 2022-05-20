import React, { Component, useState } from 'react';
import './LogUserIn.css';


const SignUserUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = { email, username, password };
        
        fetch('http://localhost:3000/routes', {
            method: 'POST',
            headers: {"Content-Type": "new Account"},
            body: JSON.stringify(account)
        }).then(() => {
            console.log('new blog is added');
        })
    }

        return(
            <div className="contGrid">
                <div className="logIn giveBorder">
                    <p>Welcome to Sign User Up</p>
                    <form name ="Sign Up" onSubmit = {handleSubmit}>
                        <label for="Email">Email: </label>
                        <input 
                            type="text" 
                            required
                            placeholder="email"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            />
                        <br />
                        <label for="Username">Username: </label>
                        <input 
                            type="text" 
                            required 
                            placeholder="username"
                            value = {username}
                            onChange = {(e) => setUsername(e.target.value)}
                            />  
                                
                        <br />
                        <label for="Password">Password: </label>
                        <input 
                            type="password" 
                            required 
                            placeholder="password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            />
                        <br />
                        <button>SIGN UP</button>
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

    export default SignUserUp;
