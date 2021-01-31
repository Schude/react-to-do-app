import React from "react";
import Todocontainer from "./todocontainer";
import Header from "./header";
import Form from "./form";
import DataProvider from "../provider/DataProvider";

const Home = () => {
  return (
    <div>
      <Header />
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
