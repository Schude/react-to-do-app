import React, { useContext } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
  // const [newUser, setNewUser] = useState({});
  const { handleSignup, newUser, setNewUser, errors } = useContext(
    firebaseAuth
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    //wait to signup
    await handleSignup();

    //push dashbord
    props.history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        name="username"
        value={newUser.username}
      />
      <input
        className="input-field"
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="email"
        value={newUser.email}
      />
      <input
        className="input-field"
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="password"
        value={newUser.password}
      />
      <button className="btn">Sign Up</button>
      {errors.length > 0
        ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
        : null}
    </form>
  );
};
export default withRouter(SignUp);
