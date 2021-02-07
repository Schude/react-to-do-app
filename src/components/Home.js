import React from "react";
import Todocontainer from "./todocontainer";
import Form from "./form";
import DataProvider from "../provider/DataProvider";

const Home = () => {
  return (
    <div>
      <DataProvider>
        <Form />
        <div className="todos">
          <Todocontainer value={false} />
          <Todocontainer value={true} />
        </div>
      </DataProvider>
    </div>
  );
};

export default Home;
