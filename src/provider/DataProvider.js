import React, { useState } from "react";
import {dbMethods} from '../firebase/dbMethods'
import { db } from "../firebase/FirebaseConfig";

const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleFinish = (todo) => {
    todo.finished = !todo.finished;
    setTodos([...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleChange = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        finished: false,
      },
    ]);
    dbMethods.add(newTodo);

    setNewTodo("");
  };

  const showTodos = (todos) => {
    todos
      .filter((todo) => todo.finished === props.value)
      .map((todo) => (
        <li className="todo_item" key={todo.id}>
          {todo.text}
          <span className="todo_item_buttons">
            <button
              className="todo_item_button"
              onClick={() => handleFinish(todo)}
            >
              ✔
            </button>
            <button
              className="todo_item_button"
              onClick={() => removeTodo(todo.id)}
            >
              ❌
            </button>
          </span>
        </li>
      ));
  };

  return (
    <firebaseData.Provider
      value={{
        handleChange,
        handleSubmit,
        todos,
        newTodo,
        setTodos,
        setNewTodo,
        handleFinish,
        removeTodo,
        showTodos,
        value: false,
      }}
    >
      {props.children}
    </firebaseData.Provider>
  );
};

export const firebaseData = React.createContext();

export default DataProvider;
