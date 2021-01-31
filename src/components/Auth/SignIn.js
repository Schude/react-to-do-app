import React, { useState } from "react";

function SignIn () {
    const [user,setUser] = useState()


   const  handleChange = (event) => {
        event.preventDefault();
        setUser({...user,[event.target.name]: event.target.value})
        console.log(user)
    }
    const handleSubmit = (event) => {
        console.log(event.target.value)
        setUser();
    }
  
    return (
      <div className="container">
        <form onSubmit = {handleSubmit}>
          <h3>Login</h3>
          <div className="input-field">
            <label htmlFor="email"> Email</label>
            <input name="email" type="email" id="email" onChange ={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"> Password</label>
            <input name="password" type="password" id="password" onChange ={handleChange} />
          </div>
          <div>
            <button type="submit" onClick = {handleSubmit} >Login</button>
          </div>
        </form>
      </div>
    );
  
}
export default SignIn;
