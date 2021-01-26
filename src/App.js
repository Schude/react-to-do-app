import React, { useState } from "react";
import Form from "./components/form";
import Todocontainer from "./components/todocontainer";
import Button from "./components/button";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();

    setNewTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, finished: false }]);
    setNewTodo("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={handleChange}
          placeholder="your Todo"
        ></input>
      </form>
      <div className="todo-Container">
        <ul>
          {todos && todos.map((todo) => <li key={todo.id}>{todo.text} </li>)}
        </ul>
      </div>

      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
