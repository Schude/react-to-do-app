import React, { useEffect, useState, useContext } from "react";
import { dbMethods } from "../firebase/dbMethods";
import { db } from "../firebase/FirebaseConfig";
import { firebaseAuth } from "../provider/AuthProvider";
import shortid from "shortid";
const DataProvider = (props) => {
  const { user } = useContext(firebaseAuth);
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinish = (todo) => {
    todo.finished = !todo.finished;
    setTodos([...todos]);
    db.collection(user).doc(todo.id).update({
      finished: true,
    });
  };

  async function getTodos() {
    const snapshot = await db.collection(user).get();
    setTodos(snapshot.docs.map((doc) => doc.data()));
    console.log(todos);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    db.collection(user)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    const todo = { id: shortid.generate(), text: newTodo, finished: false };
    setTodos([...todos, todo]);
    dbMethods.add(user, todo);
    event.preventDefault();

    setNewTodo("");
    getTodos();
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
        data,
        setData,
        // getTodos,
      }}
    >
      {props.children}
    </firebaseData.Provider>
  );
};

export const firebaseData = React.createContext();

export default DataProvider;
