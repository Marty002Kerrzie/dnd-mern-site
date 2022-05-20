import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UseWithoutUser = () => {
    const [tempUsername, setTempUsername] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        console.log(`WELCOME ${tempUsername}`);
        setIsPending(false);
        history.push('./')
    }

    return(
        <div>
            You can always join in on the fun by signing up and creating an account: 
            <a href = "./SignUserUp"> HERE</a>
            <form name="Make a Temporary Username" onSubmit={handleSubmit}>
                <label for="tempUsername">Temporary Username: </label>
                <input 
                    type="text"
                    placeholder="Temp Username"
                    required
                    value = {tempUsername}
                    onChange = {(e) => setTempUsername(e.target.value)} />
                <br />
                { !isPending && <button>USE NOW</button> }
                { isPending && <button disabled>GETTING STARTED</button> }
            </form>
        </div>
    );
}

export default UseWithoutUser;