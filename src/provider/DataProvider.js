import React, { useState } from "react";
import { firestoreMethods } from "../firebase/firestoreMethods";

const DataProvider = (props) => {
  const [test, setTeset] = useState();
  const handleTest = () => {
    // firestoreMethods.deneme();
    console.log("works");
  };

  return (
    <firebaseData.Provider value={{ test,setTeset }}>
      {props.children}
    </firebaseData.Provider>
  );
};

export const firebaseData = React.createContext();

export default DataProvider;
