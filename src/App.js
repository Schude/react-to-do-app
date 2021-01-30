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
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const finishTodo = (todo) => {
    todo.finished = !todo.finished;
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <Form  todos = {todos} setTodos = {setTodos} />
      {/* <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={handleChange}
          placeholder="your Todo"
        ></input>
      </form> */}
      <div className="todo-Container">
        <ul>
          {todos &&
            todos
              .filter((todo) => todo.finished === false)
              .map((todo) => (
                <li
                  style={todo.finished ? { color: "green" } : { color: "red" }}
                  onClick={() => finishTodo(todo)}
                  key={todo.id}
                >
                  {todo.text}
                  <button onClick={() => removeTodo(todo.id)}>❌</button>
                </li>
              ))}
        </ul>
      </div>
      <div>
        todos bitenler :
        <ul>
          {todos &&
            todos
              .filter((todo) => todo.finished === true)
              .map((finishedTodo) => (
                <li
                  onClick={() => finishTodo(finishedTodo)}
                  key={finishedTodo.id}
                >
                  {finishedTodo.text}{" "}
                  <button onClick={() => removeTodo(finishedTodo.id)}>
                    ❌
                  </button>
                </li>
              ))}
        </ul>
      </div>

      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
