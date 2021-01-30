import React, { useState } from "react";
import Form from "./components/form";
import Todocontainer from "./components/todocontainer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <Todocontainer todos={todos} setTodos={setTodos} value= {false} />
      <Todocontainer todos={todos} setTodos={setTodos} value= {true}/>


      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
