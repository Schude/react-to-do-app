import React, { useState } from "react";
import { authMethods } from "../firebase/authMethods";

const AuthProvider = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    authMethods.signup(newUser, setErrors, setToken);
  };
  const handleSignin = () => {
    authMethods.signin(user, setErrors, setToken);
  };
  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        handleSignout,
        token,
        user,
        setUser,
        errors,

        newUser,
        setNewUser,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();

export default AuthProvider;
