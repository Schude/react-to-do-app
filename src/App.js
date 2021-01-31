import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import "./App.css";
import SignUp from "./components/Auth/SignUp";
import { firebaseAuth } from "./provider/AuthProvider";
import Home from "./components/Home";

function App() {
  const { token } = useContext(firebaseAuth);

  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path="/"
          render={(rProps) => (token !== null ? <SignIn /> : <Home />)}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
