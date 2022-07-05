import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LogUserIn = () => {
    const [email, checkEmail] = useState("");
    const [password, checkPassword] = useState("");
    const [username, checkUsername] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        const account = { username, password };
        console.log(`So your account is ${username}, ${password}`);
        setIsPending(false);
        history.push("./");
    }

    return(
        <div className="gridContainer1">
            <p>Welcome to the Log In Page</p>
            <form name ="Log In Page" onSubmit={handleSubmit}>
                <label for ="username">Username: </label>
                <input
                    type = "text"
                    required
                    value = {username}
                    placeholder = "username"
                    onChange = {(e) => checkUsername(e.target.value)} />
                <br />
                <label name = "password">Password: </label>
                <input 
                    type="text"
                    required
                    value = {password}
                    placeholder = "password"
                    onChange = {(e) => checkPassword(e.target.value)} />
                <br />
                { !isPending && <button>LOG IN</button>}
                { isPending && <button disabled>LOGGING IN</button>}
                </form> 
        </div>
    );
}

export default LogUserIn;