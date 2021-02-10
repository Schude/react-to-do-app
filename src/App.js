import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import "./App.css";
import SignUp from "./components/Auth/SignUp";
import { firebaseAuth } from "./provider/AuthProvider";
import Home from "./components/Home";
import Giris from './components/giris'

import LogRocket from 'logrocket';
LogRocket.init('rzlq9o/test');

function App() {
  const { token } = useContext(firebaseAuth);

  return (
    <div className="wrapper">
    
      <Switch>
        <Route
          exact
          path="/"
          render={(rProps) => (token === null ? <Giris /> : <Home />)}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
