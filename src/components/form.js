import React, { useState } from "react";
import { database } from "../firebase/FirebaseConfig";
import "./styles/form.css";
export default function Form(props) {
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
      { id: Date.now(), text: newTodo, finished: false },
    ]);

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
      {/* <button type = "submit"> Add </button> */}
    </form>
  );
}
