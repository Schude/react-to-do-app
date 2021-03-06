import React, { useContext, useEffect } from "react";
import { firebaseData } from "../provider/DataProvider";
import { firebaseAuth } from "../provider/AuthProvider";
import "./styles/todocontainer.css";

const Todocontainer = (props) => {
  const { handleFinish, setTodos, removeTodo, todos, dbData } = useContext(
    firebaseData
  );
  const { handleSignout } = useContext(firebaseAuth);
  useEffect(() => {
    setTodos(dbData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbData]);

  return (
    <div className="todos_container">
      <h2> {!props.value ? "To-Do List" : "Finished To-dos"}</h2>
      <ul className="todo_list">
        {todos &&
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
            ))}
      </ul>
      <button onClick={handleSignout}> Sign OUT</button>
    </div>
  );
};

export default Todocontainer;
