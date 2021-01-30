import React, { useState } from "react";
import Button from "./button";

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
    <form onSubmit={handleSubmit}>
      <input
        value={newTodo}
        onChange={handleChange}
        placeholder="your Todo FORM"
      ></input>
      {/* <button type = "submit"> Add </button> */}
    </form>
  );
}
