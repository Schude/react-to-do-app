import React, { useState } from "react";

function SignUp () {
    const [newUser,setNewUser] = useState()


   const  handleChange = (event) => {
        
        setNewUser({...newUser,[event.target.id]: event.target.value})
        console.log(newUser)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewUser();
    }
  
    return (
      <div className="container">
        <form onSubmit = {handleSubmit}>
          <h3>SignUp</h3>
          <div className="input-field">
            <label htmlFor ="firstName">Username</label>
            <input name = "username"type ="text" id ="username" onChange ={handleChange} />
            <label htmlFor="email"> Email</label>
            <input name="email" type="email" id="email" onChange ={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"> Password</label>
            <input name="password" type="password" id="password" onChange ={handleChange} />
          </div>
          <div>
            <button type="submit" >Login</button>
          </div>
        </form>
      </div>
    );
  
}
export default SignUp;
