import React, { useState } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Todocontainer from "./components/todocontainer";
import Header from "./components/header";
import Form from "./components/form";
import SignIn from "./components/Auth/SignIn";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <SignIn />



      <Form todos={todos} setTodos={setTodos} />
      <div className="todos">
        <Todocontainer todos={todos} setTodos={setTodos} value={false} />
        <Todocontainer todos={todos} setTodos={setTodos} value={true} />
      </div>
    </div>
  );
}

export default App;

