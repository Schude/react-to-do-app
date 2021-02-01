import React, { useState } from "react";
import { authMethods } from "../firebase/authMethods";

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState({username: "", email:"",password:"" })
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    authMethods.signup(newUser.email, newUser.password, setErrors, setToken);
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
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
        newUser,
        setNewUser
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();

export default AuthProvider;
