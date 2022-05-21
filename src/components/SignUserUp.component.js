import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUserUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        const account = { email, username, password };
        
        console.log('new account is added');

        setIsPending(false);
        history.push('./')
    }

        return(
            <div>
                <div>
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
                        { !isPending && <button>SIGN UP</button>}
                        { isPending && <button disabled>SIGNING YOU UP...</button>}
                    </form>
                </div>
                <div>
                    PICTURE
                </div>
                <div>
                    FOOTER
                </div>
            </div>
        )
    };

    export default SignUserUp;
