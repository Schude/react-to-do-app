import React, {useState} from "react";

const Todocontainer = (props) => {
  // const [todos, setTodos] = useState([]);

  const finishTodo = (todo) => {
    todo.finished = !todo.finished;
    props.setTodos([...props.todos]);
  };
  const removeTodo = (id) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-Container">
        <ul>
          {props.todos &&
            props.todos
              .filter((todo) => todo.finished === props.value)
              
              .map((todo) => (
                <li
                  style={todo.finished ? { color: "green" } : { color: "red" }}
                  
                  key={todo.id}
                >
                  {todo.text}
                  <button onClick={() => finishTodo(todo)} > ✔</button>
                  <button onClick = {() => removeTodo (todo.id)}>❌</button>
                </li>
               

              ))}
        </ul>
      </div>
      
  );
};

export default Todocontainer;
