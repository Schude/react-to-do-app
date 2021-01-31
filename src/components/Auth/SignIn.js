import React, { useState, useContext } from "react";
import { database, firebaseAuth } from "../../provider/AuthProvider";

function SignUp() {
  // const [newUser, setNewUser] = useState({});
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      SignIN
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="email"
        value={inputs.email}
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="password"
        value={inputs.password}
      />
      <button>Sign In</button>
      {errors.length > 0
        ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
        : null}
    </form>
  );
}
export default SignUp;
