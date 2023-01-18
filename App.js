import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import CardList from "./src/components/CardList";

const AppLayout = () => {
  console.log("RENDERED FROM [App.js]");
  return (
    <>
      <Navbar />

      <CardList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
