import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SignUserUp from "./components/SignUserUp.component";
import LogUserIn from "./components/LogUserIn.component";
import UseWithoutUser from "./components/UseWithoutUser.component";
import ResetUserPassword from "./components/ResetUserPassword.component";
import Home from "./components/HomePage.component";

function App() {
  return (
    <Router>
      <div>
        <nav className="container">
          <Navbar />
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
              </Route> 
            <Route path="/LogUserIn">
              <LogUserIn />
              </Route>
            <Route path="/SignUserUp">
              <SignUserUp />
              </Route>
            <Route path="/UseWithoutUser">
              <UseWithoutUser />
              </Route>
            <Route path="/ResetUserPassword">
              <ResetUserPassword />
              </Route>
            </Switch>
          </nav>
        </div>
      </Router>
  );
};

export default App;
