import React, { useState, useContext } from "react";
import "./styles/form.css";
import {firestoreMethods} from '../firebase/firestoreMethods'

function Form(props) {

  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    props.setTodos([
      ...props.todos,
      {
        id: Date.now(),
        text: newTodo,
        finished: false,
      },
    ]);
    console.log(props.todos);
    setNewTodo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        value={newTodo}
        onChange={handleChange}
        placeholder="your Todo FORM"
      ></input>
      <button type="submit"> Add </button>
    </form>
  );
}
export default Form;
