import React, { useEffect, useState, useContext } from "react";
import { dbMethods } from "../firebase/dbMethods";
import { db } from "../firebase/FirebaseConfig";

import { firebaseAuth } from "../provider/AuthProvider";

const DataProvider = (props) => {
  const { user } = useContext(firebaseAuth);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (todos) {
      getTodos();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinish = (todo) => {
    todo.finished = !todo.finished;
    setTodos([...todos]);
  };
  const getTodos = () => {
    var docRef = db.collection("Users").doc(user);

    docRef.get().then((doc) => {
      if (doc.exists) {
        setTodos(doc.data().todos);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    if (newTodo === "") return;
    const todo = {id:Date.now(), text: newTodo, finished: false};
    setTodos([
      ...todos,
     todo,
    ]);
     dbMethods.add(user, todo);
    event.preventDefault();

    setNewTodo("");
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
        value: false,
        getTodos,
      }}
    >
      {props.children}
    </firebaseData.Provider>
  );
};

export const firebaseData = React.createContext();

export default DataProvider;
