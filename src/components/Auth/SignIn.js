import React, { useState } from "react";

function SignIn () {
    const [user,setUser] = useState()


   const  handleChange = (event) => {
        
        setUser({...user,[event.target.id]: event.target.value})
        console.log(user)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
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
