import React, { useState, useContext, useEffect } from "react";
import { dbMethods } from "../firebase/dbMethods";
import { db } from "../firebase/FirebaseConfig";
import { firebaseAuth } from "../provider/AuthProvider";
import shortid from "shortid";
const DataProvider = (props) => {
  const { user } = useContext(firebaseAuth);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  //sonsuz render problemi veya geç update etme
  async function getTodos() {
    const snapshot = await db.collection(user).get();
    setTodos(snapshot.docs.map((doc) => doc.data()));
  }

  const removeTodo = (id) => {
    dbMethods.remove(user, id);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodo === "") return;
    const todo = { id: shortid.generate(), text: newTodo, finished: false };
    dbMethods.add(user, todo);
    setNewTodo("");
  };

  const handleFinish = (todo) => {
    dbMethods.update(user, todo);
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
