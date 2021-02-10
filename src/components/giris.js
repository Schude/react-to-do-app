import React from "react";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import "./styles/giris.css";
import { Route, Link } from "react-router-dom";

export default function Giris() {
  return (
    <div className="container">
      <div className="tabs">
        <div className="tab">Sign In</div>
        <div className="tab"> Sign Up</div>
      </div>
      <div className="form-container">
        <Route
          path="/"
          render={() => (
            <div>
              <SignIn />
              <SignUp/>
            </div>
          )}
        ></Route>
      </div>
    </div>
  );
}
