import React from "react";
import "./styles/todocontainer.css";

const Todocontainer = (props) => {
  const finishTodo = (todo) => {
    todo.finished = !todo.finished;
    props.setTodos([...props.todos]);
  };
  const removeTodo = (id) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todos_container">
      <h2> {!props.value ? "To-Do List": "Finished To-dos"}</h2>
      <ul className="todo_list" >
        {props.todos &&
          props.todos
            .filter((todo) => todo.finished === props.value)

            .map((todo) => (
              <li className ="todo_item"
                style={todo.finished ? { color: "blue" } : { color: "red" }}
                key={todo.id}
              >
                {todo.text}
                <span className = "todo_item_buttons">
                <button className = "todo_item_button" onClick={() => finishTodo(todo)}>✔</button>
                <button className = "todo_item_button" onClick={() => removeTodo(todo.id)}>❌</button>
                </span>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Todocontainer;
