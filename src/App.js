import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
        <form className="header">
          <fieldset>
            <legend>Log In</legend>
          <label className="userText">
            Username: </label><input placeholder="Username">
          </input>
          <br></br>
          <label className="userText">
            Email: 
          </label>
          <input placeholder="Email"></input>
          <br></br>
          <label className="userText">
            Password: 
          </label>
          <input placeholder="Password" type="password">
          </input>
          </fieldset> 
          </form> 
          <div className="SignUp">
            SignUp
          </div>
          <div className="NoAccount">
            No Account?
          </div>
    </div>
    </Router>
  );
}

export default App;
