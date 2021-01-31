import React, { useState } from "react";
import { authMethods } from "../firebase/authMethods";

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignin = () => {
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignout = () => {
    authMethods.signout();
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();

export default AuthProvider;
