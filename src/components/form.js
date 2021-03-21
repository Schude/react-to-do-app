import React, { useContext } from "react";
import "./styles/form.css";
import { firebaseData } from "../provider/DataProvider";

function Form() {
  const { newTodo, handleChange, handleSubmit } = useContext(firebaseData);



  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        value={newTodo}
        onChange={handleChange}
        placeholder="your Todo FORM"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
