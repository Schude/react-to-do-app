import React, { useContext } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";

function SignIn() {
 
  const { handleSignin, user, setUser, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input-field"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
        />
        <input
          className="input-field"
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
        />
        <button className="btn">Sign In</button>
        {errors.length > 0
          ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
          : null}
      </form>
    
  );
}
export default SignIn;
