import React, { useState } from "react";
import Button from "./button";


export default function Form() {
  const [todo, setTodo] = useState("");

 const handleSubmit = (e) =>{
    e.preventDefault();
    setTodo(e.target.value)

 }


  return (
    <form onSubmit={handleSubmit} >
      <input />
      {/* <Button text = "Add"/> */}
    </form>
    
  );
}
