import React, { useState, useContext } from "react";
import { database, firebaseAuth } from "../../provider/AuthProvider";
import { withRouter } from "react-router-dom";
const SignUp = (props) => {
  // const [newUser, setNewUser] = useState({});
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //wait to signup
    await handleSignup();
    //push home
    props.history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      Sign Up
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="email"
        value={inputs.email}
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="password"
        value={inputs.password}
      />
      <button>Sign Up</button>
      {errors.length > 0
        ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
        : null}
    </form>
  );
};
export default withRouter(SignUp);
