import React, { useState, useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import Todocontainer from "./todocontainer";
import Header from "./header";
import Form from "./form";

const Home = (props) => {
  const { signout } = useContext(firebaseAuth);
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <div className="todos">
        <Todocontainer todos={todos} setTodos={setTodos} value={false} />
        <Todocontainer todos={todos} setTodos={setTodos} value={true} />
      </div>
      <button onClick={signout}>sign out </button>
    </div>
  );
};

export default Home;
