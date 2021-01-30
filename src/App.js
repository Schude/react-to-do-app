import React, { useState } from "react";
import Form from "./components/form";
import Todocontainer from "./components/todocontainer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <Form todos={todos} setTodos={setTodos} />
      <div className ="todos">
      <Todocontainer todos={todos} setTodos={setTodos} value={false} />
      <Todocontainer todos={todos} setTodos={setTodos} value={true} />
      </div>
    </div>
  );
}

export default App;
