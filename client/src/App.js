import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/bubble-page-this-is-protected">Bubble Page</Link>
          </li>
        </ul>

      <Switch>
        <PrivateRoute exact path="/bubble-page-this-is-protected" 
        component={BubblePage}
        />
        <Route exact path="/" component={Login} />
        <Route component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
